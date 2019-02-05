"""

	2) Add a try-except statement to the body of this function which handles a possible IndexError, which
	   could occur if the index provided exceeds the length of the list. Print an error message if this happens.

"""

def print_list_element(thelist, index):
	print(thelist[index])

try:
	print_list_element([1,2,3,4,5,6],3)
	print_list_element([1,2,3,4,5,6],8)
except IndexError:
	print("Cannot print the number at the specified index as list index is out of range!!!")
