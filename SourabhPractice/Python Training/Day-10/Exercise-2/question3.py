"""
	3) Write a program which finds factorial of a given number. E.g. 3 factorial, or 3! is equal to 3 x 2 x 1;
	   5! is equal to 5 x 4 x 3 x 2 x 1, etc.. Your program should only contain a single loop.
	
"""
# function to calculate factorial
def calculate_factorial(number_1):
	if( number_1 == 1 or number_1 == 2 ):
		return number_1

	# assign the stopping condition
	if not( number_1 % 2 == 0 ):
		stop_condition = ( number_1 + 1 ) / 2
	else:
		stop_condition = number_1 / 2

	# calculate factorial ---> 7! = 7 X 6 x 5 x 4 x 3 x 2 x 1 = 14 x 18 x 20
	# this method calculates the factorial in half iterations of the number
	count=2
	result=1
	while(number_1 > stop_condition):
		if(number_1 == count):
			result*=number_1
		else:
			result*=number_1*count
		number_1 -= 1
		count += 1
	return result

number_1=int(input("Enter Number : "))
print(calculate_factorial(number_1))
