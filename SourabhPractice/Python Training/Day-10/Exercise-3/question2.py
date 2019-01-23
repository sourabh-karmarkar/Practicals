"""
	2) Modify your code to make it easier to access a month in the calendar by human readable month name, and
	   each week by a name which is numbered starting from 1. Add an event (in the form of a string description)
	   to the second week in July.
	
"""
calendar=[]

for x in range(12):
	month=[]
	for y in range(4):
		month.append([])
	calendar.append(month)

print(calendar)

(JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER) = range(12)
(WEEK_1, WEEK_2, WEEK_3, WEEK_4) = range(4)

calendar[JULY][WEEK_2].append("Go on holiday!")
print(calendar)
