# Enter your code here. Read input from STDIN. Print output to STDOUT

import calendar

list_1=input().split(" ")

# get the weekday number by passing the year, month and day
a=calendar.weekday(int(list_1[2]),int(list_1[0]),int(list_1[1]))

# get the day name by passing the weekday number
print(calendar.day_name[a].upper())
