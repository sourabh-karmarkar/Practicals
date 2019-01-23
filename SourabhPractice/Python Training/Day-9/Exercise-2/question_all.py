"""
	1) Create a list a which contains three tuples. The first tuple should contain a single element,
	   the second two elements and the third three elements.
	2) Print the second element of the second element of a.
	3) Create a list b which contains four lists, each of which contains four elements.
	4) Print the last two elements of the first element of b.
"""

a=[(1),(2,3),(4,5,6)]
print("a =",a)
print("Second element of the second element of a is :",a[1][1])

b=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
print("b =",b)
print("Last two elements of the first element of b is :",b[0][-2:])
