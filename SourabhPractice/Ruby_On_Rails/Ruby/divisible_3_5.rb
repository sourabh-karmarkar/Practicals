# print all numbers between 1 to 100 which are divisible by 3 or 5

arr = (1..100).to_a.select do |i|
  i % 3 == 0 or i % 5 == 0
end
print arr
puts