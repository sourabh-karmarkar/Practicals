"""
	1) Convert a list which contains the numbers 1, 1, 2, 3 and 3, and convert it to a tuple a.
	2) Convert a to a list b. Print it's length.
	3) Convert b to a set c. Print it's length.
	4) Convert c to a list d. Print it's length.
	5) Create a range which starts at 1 and ends at 10. Convert it to a list e.
	6) Create the directory dict from the previous example. Create a list t which contains all the key-value
	   pairs from the dictionary as tuples.
	7) Create a list v of all the values in the dictionary.
	8) Create a list k of all the keys in the dictionary.
	9) Create a string s which contains the word "antidisestablishmentarianism". Use the sorted function on it.
	   What is the output type? Concatenate the letters in the output to a string s2.
	10) Split the string "the quick brown fox jumped over the lazy dog" into a list w of individual words.
"""

number_list = [1,1,2,3,3]
a = tuple(number_list)
print("a =",a)

b = list(a)
print("b =",b)
print("Length of b is",len(b))

c = set(b)
print("c =",c)
print("Length of c is",len(c))

d = list(c)
print("d =",d)
print("Length of d is",len(d))

e = list(range(1,11))
print("e =",e)

directory={"Jane Doe":"+27 555 5367","John Smith":"+27 555 6254","Bob Stone":"+27 555 5689"}
t = list(tuple(directory.items()))
print(t)

v = list(directory.values())
print(v)

k = list(directory.keys())
print(k)

s = "antidisestablishmentarianism"
s1=sorted(s)
print("s1 =",s1)
# Output type is list. Every letter goes in the list as a single element. List becomes
# ['a','a','a','a','b','d','e','e','h','i','i','i','i','i','l','m','m','n','n','n','r','s','s','s','s','t','t','t']
s2 = "".join(s1)
print("s2 =",s2)

string_1="the quick brown fox jumped over the lazy dog"
w=string_1.split(" ")
print("w =",w)
