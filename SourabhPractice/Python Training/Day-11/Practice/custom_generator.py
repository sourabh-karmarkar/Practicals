def first(n):
    num=0
    while num<n:
        yield num
        num+=1

my_num=first(5)
print(type(my_num))
print(list(my_num))