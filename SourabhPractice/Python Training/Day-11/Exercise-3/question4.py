"""
	4) Implement a simple calculator with a menu. Display the following options to the user, prompt for a
	   selection, and carry out the requested action (e.g. prompt for two numbers and add them). After each
	   operation, return the user to the menu. Exit the program when the user selects 0. If the user enters a
	   number which is not in the menu, ignore the input and redisplay the menu. You can assume that the user will
	   enter a valid integer:

		-- Calculator Menu --

			0. Quit
			1. Add two numbers
			2. Subtract two numbers
			3. Multiply two numbers
			4. Divide two numbers
"""

def add_func():
	number_1=int(input("Enter Number 1 : "))
	number_2=int(input("Enter Number 2 : "))
	return number_1 + number_2

def sub_func():
	number_1=int(input("Enter Number 1 : "))
	number_2=int(input("Enter Number 2 : "))
	return number_1 - number_2

def mul_func():
	number_1=int(input("Enter Number 1 : "))
	number_2=int(input("Enter Number 2 : "))
	return number_1 * number_2

def div_func():
	number_1=int(input("Enter Number 1 : "))
	number_2=int(input("Enter Number 2 : "))
	return number_1 / number_2

while True:
	print("0. Quit")
	print("1. Add two numbers")
	print("2. Subtract two numbers")
	print("3. Multiply two numbers")
	print("4. Divide two numbers")

	option = int(input("Select Option : "))
	
	# get option from the user call the necessary function which returns the answer
	# if option entered is zero then the program will be terminated
	if(option == 0 ):
		break
	elif(option == 1):
		print("Addition Is :",add_func())
	elif(option == 2 ):
		print("Substraction Is :",sub_func())
	elif(option == 3):
		print("Multiplication Is :",mul_func())
	elif(option == 4):
		print("Division Is :",div_func())

print("Exited Successfully")
