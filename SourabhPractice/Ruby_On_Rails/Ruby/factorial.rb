print("Enter Any Number : ")
num = gets.to_i()
fact = 1
(1..num).to_a.each do |i|
  fact *= i
end
puts "Factorial of #{num} is #{fact}!"