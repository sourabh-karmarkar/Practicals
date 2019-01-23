"""
	1) Create a string which contains the first 10 positive integers separated by commas and spaces. Remember that
	   you cannot join numbers - you have to convert them to strings first. Print the output string.

"""

num_str=""
num_str =str([x for x in range(1,11)])
print(num_str)
print(type(num_str))
