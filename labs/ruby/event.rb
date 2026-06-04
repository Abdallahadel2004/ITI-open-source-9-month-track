class Event
  attr_reader :category, :description, :duration, :timestamp

  def initialize(category, description, duration, timestamp = Time.now)
    @category = category
    @description = description
    @duration = duration.to_i
    @timestamp = timestamp
  end
end
