"""
	4) Write a program which prompts the user with 10 floating point-numbers and calculates their sum, product
	   and average. Your program should only contain a single loop.
	
"""

number_sum = 0
number_product = 1
avg_count=0

for x in range(1,11):
	number = float(input("Enter Number %d : "%x))
	number_sum += number
	number_product *= number
	avg_count += 1

number_avg = number_sum / avg_count

print("Sum = %.4f"%number_sum)
print("Product = %.4f"%number_product)
print("Average = %.4f"%number_avg)
