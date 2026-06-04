require_relative 'base_handler'
require_relative 'event'
require_relative 'event_router'

# Define a concrete handler that inherits from BaseHandler but fails to implement `call`
class BadHandler < BaseHandler
  # Forgot to implement `call`!
end

begin
  puts "Testing runtime contract enforcement..."
  router = EventRouter.new
  router.add_handler(BadHandler.new)
  
  event = Event.new("STUDY", "Testing bad handler", 30)
  
  puts "Dispatching event to BadHandler. Expecting NotImplementedError..."
  router.dispatch(event)
  
  puts "\e[31m❌ FAIL: The BadHandler did not raise a NotImplementedError!\e[0m"
  exit(1)
rescue NotImplementedError => e
  puts "\e[32m✅ SUCCESS: Correctly raised NotImplementedError: #{e.message}\e[0m"
  exit(0)
rescue => e
  puts "\e[31m❌ FAIL: Raised an unexpected error type: #{e.class} - #{e.message}\e[0m"
  exit(1)
end
