"""
	2) Rewrite the calendar program from exercise 3 using nested comprehensions instead of nested loops. Try to
	   append a string to one of the week lists, to make sure that you haven't reused the same list instead of
	   creating a separate list for each week.

"""

calendar = [[[] for w in range(4)] for m in range(12)]

print(calendar)
(JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST,
SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER) = range(12)

(WEEK_1, WEEK_2, WEEK_3, WEEK_4) = range(4)

calendar[JULY][WEEK_2].append("Go on holiday!")
print(calendar)
