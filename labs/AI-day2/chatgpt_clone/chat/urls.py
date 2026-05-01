from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat_view, name='chat'),
    path('chat/<int:session_id>/', views.chat_view, name='chat_session'),
    path('new/', views.new_chat, name='new_chat'),
    path('delete/<int:session_id>/', views.delete_chat, name='delete_chat'),
    path('clear/', views.clear_all, name='clear_chat'),
]
