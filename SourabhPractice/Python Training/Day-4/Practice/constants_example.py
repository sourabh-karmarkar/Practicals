# We define some options
LOWER, UPPER, CAPITAL=1,2,3

name="jane"
# We use our constants when assigning these values...
print_style=LOWER

# ...and when checking them

if print_style == LOWER:
	print(name.lower())
elif print_style == UPPER:
	print(name.upper())
elif print_style == CAPITAL:
	print(name.capitalize())
else:
	# Nothing prevents us from accidentally setting print_style to 4, 90 or
	# "spoon", so we put this in fallback just in case
	print("Unknown style option!")
