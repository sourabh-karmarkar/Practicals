mark=float(input("Enter Marks : "))

if mark>=80:
	grade = "A"
else:
	if mark>=65:
		grade = "B"
	else:
		if mark>=50:
			grade = "C"
		else:
			grade = "D"

print(grade)
