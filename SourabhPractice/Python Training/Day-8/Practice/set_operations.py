even_numbers={2,4,6,8,10}
big_numbers={6,7,8,9,10}

#difference : numbers which are big and odd
print(big_numbers - even_numbers)
print(big_numbers.difference(even_numbers))

#union : numbers which are big or even
print(big_numbers | even_numbers)
print(big_numbers.union(even_numbers))

#intersection : numbers which are big and even
print(big_numbers & even_numbers)
print(big_numbers.intersection(even_numbers))

# numbers which are big or even but not both
print(big_numbers ^ even_numbers)
print(big_numbers.symmetric_difference(even_numbers))

big_numbers.add(11)
print(big_numbers)

big_numbers.discard(11)
print(big_numbers)