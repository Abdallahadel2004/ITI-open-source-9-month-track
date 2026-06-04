require_relative 'base_handler'

class SlackHandler < BaseHandler
  def call(event)
    formatted_time = event.timestamp.strftime("%Y-%m-%d %H:%M")
    # Simulate a Slack Webhook API Call
    payload = {
      text: "⚡ *New LifeTrack Logged!* ⚡\n" \
            "*Category:* #{event.category.upcase}\n" \
            "*Description:* #{event.description}\n" \
            "*Duration:* #{event.duration} minutes\n" \
            "*Logged At:* #{formatted_time}"
    }
    
    puts "\e[34m[Slack Integration]\e[0m Webhook simulated to Slack! Payload: #{payload[:text].gsub("\n", " | ")}"
  end
end
