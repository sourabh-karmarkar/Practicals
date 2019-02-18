# check whether number is palindrome

i = 1223
if i.to_s == i.to_s.reverse
  puts "#{i} is palindrome"
else
  puts "#{i} is not a palindrome"
end