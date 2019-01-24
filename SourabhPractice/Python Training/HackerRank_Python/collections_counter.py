from collections import Counter

x = 10
sizes = [2, 3, 4, 5, 6, 8, 7, 6, 5, 18]
n = 6 #no of customers

size_count=Counter(sizes)
list_1 = [(6,55),(6,45),(6,55),(4,40),(18,60),(10,50)]

print(size_count)
print(list_1)

for x in list_1:
    print(x)
