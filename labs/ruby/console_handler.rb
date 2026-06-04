require_relative 'base_handler'

class ConsoleHandler < BaseHandler
  def call(event)
    formatted_time = event.timestamp.strftime("%Y-%m-%d %H:%M")
    puts "[#{formatted_time}] #{event.category.upcase} — #{event.description} (#{event.duration} min)"
  end
end
