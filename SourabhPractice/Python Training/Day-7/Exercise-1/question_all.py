"""
	1) Create a tuple a which contains the first for positive integers and a tuple b which contains the
	   next four positive integers
	2) Create a tuple c which combines all the numbers from a and b in any order.
	3) Create a tuple d which is a sorted copy of c.
	4) Print the third element of d
	5) Print the last three elements of d without using it's length.
	6) Print the length of d.
"""

a=(1,2,3,4)
b=(5,6,7,8)
print(a)
print(b)

c=a+b
print(c)
d=tuple(sorted(c))
print(d)
print(d[2])
print(d[-3:])
print(len(d))
