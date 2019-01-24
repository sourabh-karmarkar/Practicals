"""
	3) Now do something similar to create a calendar which is a list with 52 empty sublists (one for each week in
	   the whole year). Hint : how would you modify the nested for loops?

"""

# creating empty list
calendar = [[[] for w in range(7)] for m in range(52)]

print(calendar)
