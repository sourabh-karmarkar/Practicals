"""

	4) Find potential sources of logic errors in this code snippet.

	A) - If you are calculating the number total by multiplication then you must initialize the total
		 to 1 and not zero, otherwise the number total will always be zero.
	   - The line which adds i_sq to sum_squares is not indented properly. It will only add the last value
		 of i_sq after the loop exits.
	   - At each iteration 0 will be added to nums, which will leave nums variable unchanged.

"""

product = 0
for i in range(10):
	product *= i
	
sum_squares = 0
for i in range(10):
	i_sq = i * 2
sum_squares += i_sq

nums = 0
for i in range(10):
	num += num
