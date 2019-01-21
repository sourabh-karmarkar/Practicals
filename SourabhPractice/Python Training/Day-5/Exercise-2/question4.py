"""
	Eliminate not from each of these boolean expressions

	not total <= 2
	not count > 40
	not (value > 20.0 and total != 100.0)
	not (angle > 180 and width == 5)
	not (count == 5 and not (value != 10) or count > 50)
	not (value > 200 or value < 0 and not total == 0)

"""

total=2
print(total > 2)

count=40
print(count <= 40)

value=20.0
total=100.0
print(value <= 20.0 and total == 100.0)

angle=180
width=5
print((angle <= 180 and width == 5))

value=10
count=5
print(count != 5 and value != 10 or count <= 50)

value=0
total=0
print(value <= 200 or value >= 0 and total != 0)
