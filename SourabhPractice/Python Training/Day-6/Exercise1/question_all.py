"""
	1) Create a list a which contains the first three odd positive integers and a list b which contains the first 		   three even positive integers.
	2) Create a new list c which combines the numbers from both lists (order is unimportant).
	3) Create a new list d which is a sorted copy of c, leaving c unchanged.
	4) Reverse d in-place.
	5) Set the fourth element of c to 42.
	6) Append 10 to the end of d.
	7) Append 7, 8 and 9 to the end of c.
	8) Print the first three elements of c.
	9) Print the last element of d without using its length.
	10) Print the length of d.
"""

a=[1,3,5]
b=[2,4,6]

c=a+b
d=sorted(c)
d.reverse()

c[4]=42
d.append(10)
c.extend([7,8,9])

print(c[:2])
print(d[-1])
print(len(d))
