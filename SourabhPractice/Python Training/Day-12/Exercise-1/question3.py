"""

	3) Find potential sources of runtime errors in this code snippet.

	A) The following program gives -

		   name 'a' is not defined
		   name 'b' is not defined

	   when they are defined, 

		   name 'my_list' is not defined

	   when my_list is defined it gives list index out of range as the list is empty and does not have any element.
	   my_list should be defined and must have floating values in it, as we are trying to print the values by %f
"""

for x in range(a, b):
	print("(%f, %f, %f)" % my_list[x])
