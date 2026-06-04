require_relative 'event'
require_relative 'event_router'
require_relative 'console_handler'
require_relative 'file_handler'
require_relative 'html_dashboard_handler'
require_relative 'slack_handler'

def run_app
  router = EventRouter.new
  
  # Register all observers simultaneously via the shared interface
  router.add_handler(ConsoleHandler.new)
  router.add_handler(FileHandler.new('lifetrack.log'))
  router.add_handler(HtmlDashboardHandler.new('dashboard.html'))
  router.add_handler(SlackHandler.new)

  categories = {
    1 => "WORK",
    2 => "STUDY",
    3 => "EXERCISE",
    4 => "MEAL"
  }

  loop do
    puts "\n=== LifeTrack ==="
    puts "1. Log a work session"
    puts "2. Log a study session"
    puts "3. Log an exercise session"
    puts "4. Log a meal"
    puts "5. Exit"
    print "\nChoose an option: "
    
    choice_raw = gets
    break unless choice_raw # Handles Ctrl+C or EOF gracefully
    choice = choice_raw.strip.to_i

    if choice == 5
      puts "Exiting LifeTrack. Goodbye!"
      break
    elsif categories.key?(choice)
      category = categories[choice]
      
      print "Description: "
      desc_raw = gets
      break unless desc_raw
      desc = desc_raw.strip

      print "Duration (minutes): "
      duration_raw = gets
      break unless duration_raw
      duration = duration_raw.strip.to_i

      if desc.empty? || duration <= 0
        puts "\e[31m❌ Error: Description cannot be empty and duration must be a positive integer.\e[0m"
        next
      end

      # Construct event object
      event = Event.new(category, desc, duration)
      
      # Dispatch to all handlers
      puts ""
      router.dispatch(event)
      puts "\e[32m✓ Event logged.\e[0m"
    else
      puts "\e[31m❌ Invalid option. Please select between 1 and 5.\e[0m"
    end
  end
end

if __FILE__ == $0
  run_app
end
