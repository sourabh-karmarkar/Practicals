"""
	1) Write a python program to convert the temperature given in degrees Fahrenheit to it's
	equivalent degrees Celsius. You can assume that T_c = (5/9) x (T_f - 32), where T_c is the temperature in
	degrees Celsius and T_f is the temperature in degrees Fahrenheit. Your program should ask the user for an
	input value, and print the output. The input and output should be floating point numbers.
"""

def convertFahrenheitToCelsius(T_fahrenheit):
	return (5/9) * (T_fahrenheit - 32)

# value is converted to float before assigning to the variable
T_fahrenheit=float(input("Enter temperature in degrees Fahrenheit : "))
T_celsius=convertFahrenheitToCelsius(T_fahrenheit)
print("%f Fahrenheit = %f Celsius"%(T_fahrenheit,T_celsius))

"""
	2) What would make this program crash? What would we need to do to handle this situation gracefully?
	
	A) If the value entered by the user is not floating point then the program may crash. To handle this we
	   will have to check whether the value entered by the user is a floating point or not. We will have to handle
	   the error when the input is being converted to float. If it is float then proceed else give an appropriate 		   message
"""
