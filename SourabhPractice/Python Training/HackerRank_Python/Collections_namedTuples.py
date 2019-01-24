# taking number of students and the index position of marks
stu_num, marks = int(input()), input().split().index("MARKS")
list_1=[]
count=0
total=0
# taking a list of marks, class, name and id from user
for num in range(stu_num):
    # each row from user and find the value at the marks index and convert to int and add to total
    total += int((input().split())[marks])
    count += 1
    
print(total/count)