a=1
b=1
c=1
n=2
list1=[ [num1,num2,num3] for num1 in range(a+1) for num2 in range(b+1) for num3 in range(c+1) if a+b+c!=n]
print(list1)