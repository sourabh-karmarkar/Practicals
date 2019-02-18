arr = []
(11..99).to_a.each do |i|
  (11..99).to_a.each do |y|
    if (i*y).to_s == (i*y).to_s.reverse
      arr.push(i*y)
    end
  end
end
puts "Max Palindrome Number is #{arr.max}"