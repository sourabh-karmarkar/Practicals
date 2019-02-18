sum1 = 0
sum2 = 0
(1..100).to_a.each do |i|
  sum1 += i*i
  sum2 += i
end
puts "Difference between sum of the squares is #{(sum2*sum2) - sum1}"

# Using one line
puts (((1..100).inject(:+))**2) - ((1..100).collect{|i| i*i}.inject(:+))