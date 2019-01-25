from collections import Counter
K=int(input())
dict_1=Counter(list(map(int,input().split(" "))))

for value in dict_1:
    if(dict_1[value]==1):
        print(value)