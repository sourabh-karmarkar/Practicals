"""
    Some programs ask to input a variable number of data entries, and finally to enter a
    specific character or string (called a sentinel) which signifies that there are no more
    entries. For example, you could be asked to enter your PIN followed by a hash (#). The hash
    is the sentinel which indicates that you have finished entering your PIN.
"""

print("Enter Strings and type a single hash(#) to terminate the program")

while True:
	string_1 = input("--> ")
	if(string_1 == "#"):
		break
print("Program exited successfully")
