"""

	2) Find potential sources of runtime errors in this code snippet.

	A) The following program gives -

		   NameError: name 'math' is not defined

	   as the math package is not imported. When imported it gives -

		   AttributeError: module 'math' has no attribute 'round'

	   as the round function is in-built in python and doesn't need to be used with math.
"""

dividend = float(input("Please enter the dividend :"))
divisor = float(input("Please enter the divisor :"))
quotient = dividend / divisor
quotient_rounded = math.round(quotient)
