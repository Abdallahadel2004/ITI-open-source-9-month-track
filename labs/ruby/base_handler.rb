class BaseHandler
  def call(event)
    raise NotImplementedError, "#{self.class} must implement the '#{__method__}' method."
  end
end
