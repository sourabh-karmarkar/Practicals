"""
	Describe the scope of the variables a,b,c and d in this example:
"""

def my_function(a):
	b = a - 2
	return b
c = 3
if c > 2:
	d=my_function(5)
	print(d)

"""

1)  - Variables a and b are local to the function my_function.
	- Variable c is a global variable and accesible from anywhere.
	- Variable d is local to to if block.

2)  - Variables a and b are created whenever the function my_function is called.
	  When the function completes it's execution the variables are destroyed.
	- Variable c is a global variable and created when it is assigned a value.
	  It is destroyed when the program terminates it's execution.
	- Variable d is created when the function completes it's execution and returns a value.
	  It is destroyed when the scope of the if block completes it's execution.

3) 	- If we assign c to a value of 1 we would not get any ouput although the program will be executed
	  but it will not enter the if statement as the condition will evaluate to False

"""
