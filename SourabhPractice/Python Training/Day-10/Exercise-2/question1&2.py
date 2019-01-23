"""
	1) Write a program which sums the integers from 1 to 10 using a for loop
	   (and prints the total at the end)
	2) Can you think of a way to do this without using a loop?

	A) We can sum the integers from 1 to 10 without using for loop by applying a simple formula
	   ( n * ( n + 1 )) / 2 where n is the max number uptil you want the sum.

	   We can also sum the the integers from 1 to 10 by using recursion
"""
sum=0
limit=10

for x in range(1,limit+1):
	print(x,"+ ",end="")
	sum+=x
print('\b\b=',sum)

print("Using for loop :",sum)
print("Without using for loop :",(limit*(limit+1))//2)
