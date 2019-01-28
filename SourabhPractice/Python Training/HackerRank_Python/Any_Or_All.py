# take the inputs from user
N, int_list = int(input()), list(map(int, input().split()))

# if the length of the list is 1 then just check the conditions and print the result accordingly
if(len(int_list) == 1):
    print(True) if (int_list[0] > 0) and list(str(int_list[0])) == list(reversed(str(int_list[0])+"")) else print(False)
else:
    # get boolean values (True if positive, False if negative)
    pos_bool_list = all([ bool(num>0) for num in int_list])
    # get boolean values (True if a palindrome, False if not a palindrome)
    pal_bool_list=[]
    for n in int_list:
        pal_bool_list.append(True) if list(str(n)) == list(reversed(str(n)+"")) else pal_bool_list.append(False)
    # print the and result of both the list to check if both conditions are true
    print(pal_bool_list and pos_bool_list)