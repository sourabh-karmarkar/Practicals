"""
	Write a program which uses a while loop to sum the squares of integers (starting from 1) until the total
	exceeds 200. Print the final total and the last number to be squared and added.
"""

sum=0
number=1

while sum<200:
	sum += (number*number)
	number+=1

print("Final Sum is : %d"%(sum))
print("last number to be squared : %d"%(number-1))
