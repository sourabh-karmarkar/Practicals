module Cream
  def cream?
    true
  end
end

class Cookie
  include Cream
end

c = Cookie.new
puts c.cream?