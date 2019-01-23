"""
	1) Write a program which uses a nested for loop to populate a three-dimensional list representing a calendar:
	   the top-level list should contain a sub-list for each month, and each month should contain four weeks. Each
	   week should be an empty list.
	
"""
calendar=[]

for x in range(12):
	month=[]
	for y in range(4):
		month.append([])
	calendar.append(month)

print(calendar)
