# Enter your code here. Read input from STDIN. Print output to STDOUT

lower=[]
upper=[]
num=[]

string=input()
for character in string:
    if character.islower():
        lower.append(character)
    elif character.isupper():
        upper.append(character)
    else:
        num.append(int(character))

lower.sort()
upper.sort()
num.sort()
str1=""
for c in lower:
    str1+=c
for c in upper:
    str1+=c
for n in num:
    if (int(n)+1) % 2 == 0:
        str1+=str(n)
for n in num:
    if int(n) % 2 == 0:
        str1+=str(n)
print(str1)