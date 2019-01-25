# Enter your code here. Read input from STDIN. Print output to STDOUT

a,y = map(int, input().split())
scores = [map(float, input().split()) for _ in range(y)]

[print(sum(student)/y) for student in zip(*scores)]