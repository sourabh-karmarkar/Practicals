"""
	1) Create a dict directory which stores telephone numbers (as string values), and populate it
	   with these key value pairs:

		Name		Telephone Number

		Jane Doe	+27 555 5367
		John Smith	+27 555 6254
		Bob Stone	+27 555 5689

	2) Change Jane's number to +27 555 1024
	3) Add a new entry for a person called Anna Cooper with the phone number +27 555 3237
	4) Print Bob's number.
	5) Print Bob's number in such a way that None would be printed if Bob's name were not in dictionary.
	6) Print all the keys. The format is unimportant as long as they're all visible.
	7) Print all the values.
	
"""

directory={"Jane Doe":"+27 555 5367","John Smith":"+27 555 6254","Bob Stone":"+27 555 5689"}
print(directory)

directory["Jane Doe"]="+27 555 1024"
print(directory)

directory["Anna Cooper"]="+27 555 3237"
print(directory)

print("Bob's number is :",directory["Bob Stone"])

print(directory.get("Bob Stone",None))

print(directory.keys())
print(directory.values())
