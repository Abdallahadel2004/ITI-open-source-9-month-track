class EventRouter
  def initialize
    @handlers = []
  end

  # Registers a handler that conforms to the BaseHandler interface
  def add_handler(handler)
    @handlers << handler
  end

  # Dispatches an event to all registered handlers
  def dispatch(event)
    @handlers.each do |handler|
      handler.call(event)
    end
  end
end
