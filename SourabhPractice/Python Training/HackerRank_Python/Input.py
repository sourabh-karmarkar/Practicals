# Enter your code here. Read input from STDIN. Print output to STDOUT
a,b=map(int,input().split())
poly=input()

f = lambda a:eval(poly.replace("x",str(a)))

print(f(a) == b)