module Commentable
  def comment
    'I love comments!'
  end
end
  
class Post
  extend Commentable
end

puts Post.comment
puts Post.singleton_class.ancestors