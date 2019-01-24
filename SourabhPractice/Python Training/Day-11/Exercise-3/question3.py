"""
   3) Write a program which averages positive integers. Your program should prompt the user to enter integers
	  until the user enters a negative integer. The negative integer should be discarded, and you should print the
	  average of all the previously entered integers.

"""

print("Enter Strings and type a single hash(#) to terminate the program")
number_total = 0
number_count = 0
while True:
	number_1 = int(input("Enter Integer : "))
	if(number_1 < 0):
		break
	number_total += number_1
	number_count += 1

average = number_total / number_count

print("Average Is : %d"%average)
