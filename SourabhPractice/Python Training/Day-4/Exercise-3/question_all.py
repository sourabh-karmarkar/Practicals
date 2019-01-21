"""
	1) Convert "8.8" to a float.
	2) Convert 8.8 to an integer (with rounding).
	3) Convert "8.8" to an integer (without rounding).
	4) Convert 8.8 to a string.
	5) Convert 8 to a string.
	6) Convert 8 to a float.
	7) Convert 8 to a boolean.
"""

print(float("8.8"),"---> ",type("8.8")," to ",type(float("8.8")))
print(int(8.8),"---> ",type(8.8)," to ",type(int(8.8)))
print(int(float("8.8")),"---> ",type("8.8")," to ",type(int(float("8.8"))))
print(str(8.8),"---> ",type(8.8)," to ",type(str(8.8)))
print(str(8.8),"---> ",type(8)," to ",type(str(8)))
print(float(8),"---> ",type(8)," to ",type(float(8)))
print(bool(8),"---> ",type(8)," to ",type(bool(8)))
