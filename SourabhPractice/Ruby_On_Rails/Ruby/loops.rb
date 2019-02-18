puts "With each loop"
(1..10).to_a.each do |i|
  puts "Value : #{i}"
end

puts "Each with index"
(1..10).to_a.each_with_index do |i,index|
  puts "Value : #{i} and index : #{index}"
end

puts "Select"
arr = (1..10).to_a.select do |i|
  i % 2 == 0
end
puts arr

puts "Reject"
arr = (1..10).to_a.reject do |i|
  i % 2 == 0
end
puts arr

1.upto(5) do |i|
  puts i
end

5.downto(1) do |i|
  puts i
end

puts "Collect"
arr = (1..10).to_a.collect do |i|
  i * 2
end
print arr
puts

puts "Map"
arr = (1..10).to_a.map do |i|
  i * 2
end
print arr
puts

puts "Each"
arr = []
(1..10).to_a.each do |i|
  arr.push(i * 2)
end
puts "Each Value #{arr}"

puts "Inject Short Hand"
puts "Addition of 1 to 10 is #{(1..10).inject(:+)}"

puts "Inject"
arr = (1..10).to_a.inject(0) do |sum,i|
  sum+=i
end
puts arr