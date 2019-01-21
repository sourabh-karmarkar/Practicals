a=12

def my_function():
	global a
	a=4
	print(a)

my_function()

print(a)

# value of a inside the function is local to that function
# value of a outside the function is accesible throughout the program
# hence we use the global keyword to indicate that we want to moduft the global variable a
