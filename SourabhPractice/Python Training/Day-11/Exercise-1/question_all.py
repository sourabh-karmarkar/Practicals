"""
	1) Create a tuple of month names and a tuple of the number of days in each month ( assume that February has
	   28 days ). Using a simgle for loop, construct a dictionary which has the month names as keys and the
	   corresponding day numbers as values.
	2) Now do the same thing without using the for loop.
	
"""

month_name=("JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER")
month_days=(31,28,31,30,31,30,31,31,30,31,30,31)

# using for loop
cal_dict={}
for month,days in zip(month_name,month_days):
	cal_dict[month]=days
print(cal_dict)

# without using for loop
print(dict(zip(month_name,month_days)))
