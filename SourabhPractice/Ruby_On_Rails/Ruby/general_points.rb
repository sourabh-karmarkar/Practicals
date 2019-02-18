a = 5
puts "Value of a is #{a}"
puts 'Value of a is #{a}'

str = "Ruby"
puts "Value of str is #{str}"

array = [1, 2.0, 'Rails', [1,2]]
puts "Value of array is #{array}"
puts "Value of array[0] is #{array[0]}"
puts "Value of array[-1] is #{array[-1]}"

hash = {:language=>'Ruby', "framework"=>"Rails"}
puts "hash value is #{hash}"
puts "hash keys are #{hash.keys}"
puts "Language is #{hash[:language]}"
puts "Framework is #{hash["framework"]}"