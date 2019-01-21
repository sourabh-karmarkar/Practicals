"""
	Rewrite the following statements as an if-ladder (using elif statements):

	if temperature < 0:
		print("Below freezing")
	else:
		if temperature < 10:
			print("Very cold")
		else:
			if temperature < 20:
				print("Chilly")
			else:
				if temperature < 30:
					print("Warm")
				else:
					if temperature < 40:
						print("Hot")
					else:
						print("Too hot")
"""

temperature=100
if temperature < 0:
	print("Below freezing")
elif temperature < 10:
	print("Very cold")
elif temperature < 20:
	print("Chilly")
elif temperature < 30:
	print("Warm")
elif temperature < 40:
	print("Hot")
else:
	print("Too hot")
