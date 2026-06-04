require_relative 'base_handler'

class FileHandler < BaseHandler
  def initialize(log_filepath = 'lifetrack.log')
    @log_filepath = log_filepath
  end

  def call(event)
    formatted_time = event.timestamp.strftime("%Y-%m-%d %H:%M")
    log_line = "[#{formatted_time}] #{event.category.upcase} — #{event.description} (#{event.duration} min)\n"
    
    File.open(@log_filepath, 'a') do |file|
      file.write(log_line)
    end
  end
end
