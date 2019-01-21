"""
	3) How can we simplify these code fragments?

	if bool(a) == True:
		print("a is true")

	if x > 50:
		b+=1
		a=5
	else:
		b-=1
		a=5
"""

# The simplified code is

#1)
print("1)")
a=2
if bool(a):
	print("a is true")

#2)
print("\n2)")
x=50
b=4
b+= 1 if (x > 50) else -1
a=5
print("Value of b is : ",b)
