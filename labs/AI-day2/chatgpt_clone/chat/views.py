import os
import time
from django.shortcuts import render, redirect, get_object_or_404
from django.conf import settings
from .models import ChatSession, Message
from openai import OpenAI


def _get_session_key(request):
    """Ensure browser session exists and return its key."""
    if not request.session.session_key:
        request.session.create()
    return request.session.session_key


def _get_or_create_active_session(request):
    """Get the most recent chat session or create a new one."""
    session_key = _get_session_key(request)
    session = ChatSession.objects.filter(session_key=session_key).first()
    if not session:
        session = ChatSession.objects.create(session_key=session_key, title="New Chat")
    return session


def chat_view(request, session_id=None):
    session_key = _get_session_key(request)

    # All sessions for this browser (for sidebar)
    all_sessions = ChatSession.objects.filter(session_key=session_key).order_by('-updated_at')

    # Pick the active session
    if session_id:
        chat_session = get_object_or_404(ChatSession, id=session_id, session_key=session_key)
    elif all_sessions.exists():
        chat_session = all_sessions.first()
    else:
        chat_session = ChatSession.objects.create(session_key=session_key, title="New Chat")
        all_sessions = ChatSession.objects.filter(session_key=session_key).order_by('-updated_at')

    if request.method == 'POST':
        user_message = request.POST.get('message', '').strip()
        selected_model = request.POST.get('model', 'openai')

        if user_message:
            # Save user message
            Message.objects.create(chat_session=chat_session, role='user', content=user_message)

            # Auto-title the session from the first user message
            if chat_session.title == "New Chat":
                chat_session.title = user_message[:50]
                chat_session.save()

            # Fetch full history for context
            history = chat_session.messages.all().order_by('created_at')

            bot_response = "Error generating response."

            try:
                if selected_model == 'openai':
                    openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
                    openai_messages = [{"role": "system", "content": "You are a helpful assistant."}]
                    for msg in history:
                        openai_messages.append({"role": msg.role, "content": msg.content})

                    response = openai_client.chat.completions.create(
                        model="gpt-4o-mini",
                        messages=openai_messages
                    )
                    bot_response = response.choices[0].message.content

                elif selected_model == 'gemini':
                    from google import genai
                    from google.genai import types

                    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

                    # Convert history for Gemini
                    gemini_history = []
                    for msg in history:
                        if msg != history.last():
                            role = 'model' if msg.role == 'assistant' else 'user'
                            gemini_history.append(types.Content(role=role, parts=[types.Part(text=msg.content)]))

                    # Retry logic for rate limits
                    max_retries = 3
                    for attempt in range(max_retries):
                        try:
                            chat = client.chats.create(model='gemini-2.5-flash-lite', history=gemini_history)
                            response = chat.send_message(user_message)
                            bot_response = response.text
                            break
                        except Exception as gemini_err:
                            error_str = str(gemini_err)
                            if '429' in error_str or 'RESOURCE_EXHAUSTED' in error_str:
                                if attempt < max_retries - 1:
                                    time.sleep(10)
                                    continue
                                else:
                                    bot_response = "⏳ Gemini free tier rate limit reached. Please wait about 30-60 seconds and try again."
                            else:
                                raise gemini_err

            except Exception as e:
                bot_response = f"An error occurred: {str(e)}"

            # Save bot response
            Message.objects.create(chat_session=chat_session, role='assistant', content=bot_response)

            # Touch updated_at
            chat_session.save()

            return redirect('chat_session', session_id=chat_session.id)

    messages = chat_session.messages.all().order_by('created_at')

    return render(request, 'chat/chat.html', {
        'chat_messages': messages,
        'all_sessions': all_sessions,
        'active_session': chat_session,
    })


def new_chat(request):
    session_key = _get_session_key(request)
    new_session = ChatSession.objects.create(session_key=session_key, title="New Chat")
    return redirect('chat_session', session_id=new_session.id)


def delete_chat(request, session_id):
    session_key = _get_session_key(request)
    ChatSession.objects.filter(id=session_id, session_key=session_key).delete()
    return redirect('chat')


def clear_all(request):
    session_key = _get_session_key(request)
    ChatSession.objects.filter(session_key=session_key).delete()
    return redirect('chat')
