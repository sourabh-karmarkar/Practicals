"""

	1) Extend the program in exercise 7 of the loop control statements chapter to include exception handling.
	   Whenever the user enters input of the incorrect type, keep prompting the user for the same value until
	   it is entered correctly. Give the user sensible feedback.

"""

person = {}

properties = [
    ("name", str),
    ("surname", str),
    ("age", int),
    ("height", float),
    ("weight", float),
]

for prop, p_type in properties:
	valid_value = None
	while valid_value is None:
		try:
			value = input("Please enter your %s: " % prop)
			valid_value = p_type(value)
		except ValueError:
			print("Could not convert %s '%s' to type %s. Please try again." % (property, value, p_type.__name__))
		person[prop] = valid_value

print(person)
