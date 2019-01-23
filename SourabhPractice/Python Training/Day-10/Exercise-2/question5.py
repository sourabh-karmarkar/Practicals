"""
	5) Rewrite the previous program so that it has two loops - one which collects and stores the numbers,
	   and one which processes them.
	
"""

number_sum = 0
number_product = 1
avg_count=0
number=[]

# take the numbers from user and add to the list.
for x in range(1,4):
	number.append(float(input("Enter Number %d : "%x)))

# traverse the list containing the numbers and calculate the sum, product and average accordingly.
for x in number:
	number_sum += x
	number_product *= x
	avg_count += 1

number_avg = number_sum / avg_count

print("Sum = %.4f"%number_sum)
print("Product = %.4f"%number_product)
print("Average = %.4f"%number_avg)
