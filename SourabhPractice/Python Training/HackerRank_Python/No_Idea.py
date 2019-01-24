# Enter your code here. Read input from STDIN. Print output to STDOUT

nm_list=input().split(" ")
N=int(nm_list[0])
M=int(nm_list[1])
n_list=[]
set_a=set()
set_b=set()
happines_count=0

# take array values and add to n_list
for num in input().split(" "):
    n_list.append(int(num))

# take set A values and add to set_a
for num in input().split(" "):
    set_a.add(int(num))

# take set B values and add to set_b
for num in input().split(" "):
    set_b.add(int(num))

# modify the happiness count if array element contains in set_a and set_b
for num in n_list:
    if num in set_a:
        happines_count+=1
    if num in set_b:
        happines_count-=1
print(happines_count)