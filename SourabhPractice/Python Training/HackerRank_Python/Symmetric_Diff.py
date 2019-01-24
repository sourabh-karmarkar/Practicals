# Enter your code here. Read input from STDIN. Print output to STDOUT
list_1=set()
list_2=set()

M=int(input())
list_1=set(list(map(int,input().split(" "))))

N=int(input())
list_2=set(list(map(int,input().split(" "))))

for element in sorted(list_1 ^ list_2):
    print(element)
