"""
	Write a python program to assign grade to students at the end of the year. The program must do the following:
	a. Ask for a student number.
	b. Ask for the student's tutorial mark.
	c. Ask for the student'a test mark
	d. Calculate whether the student's average is high enough for the student to be permitted to write the
	   examination. If the average (mean) of the tutorial and test marks is lower than 40%, the student should
	   automatically get an F grade, and the program should print the grade and exit without performing the 
	   following steps.
	e. Ask for the student's examination mark.
	f. Calculate the student's final mark. The tutorial and test marks should count for 25% of the final mark each,
	   and the final examination should count for the remaning 50%.
	g. Calculate and print the student's grade according to the following table:
	
		Weighted final score		Final grade

		80 <= mark <= 100				A
		70 <= mark < 80					B
		60 <= mark < 70					C
		50 <= mark < 60					D
		mark < 50						E

"""

student_number=input("Enter Student Number : ")
student_tutorial=float((input("Enter Student Tutorial Marks : ")))
student_test=float((input("Enter Student Test Marks : ")))

if ((student_tutorial+student_test)/2 < 40):
	grade = "F"
else:
	student_exam=float(input("Please enter the student's final examination mark: "))
	final_mark=(student_tutorial/4)+(student_test/4)+(student_exam/2)
	if 80 <= final_mark <= 100:
		grade = "A"
	elif 70 <= final_mark < 80:
		grade = "B"
	elif 60 <= final_mark < 70:
		grade = "C"
	elif 50 <= final_mark < 60:
		grade = "D"
	else:
		grade = "E"

print ("%s's grade is %s."%(student_number, grade))
