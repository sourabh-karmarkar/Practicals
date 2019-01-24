import re
# Enter your code here. Read input from STDIN. Print output to STDOUT

if __name__ == '__main__':
    
    # take the regular expressions from user and store it in list_1
    list_1 = []
    number = int(input())
    for _ in range(number):
        val = input()
        list_1.append(val)
    
    # check if regular expression is valid
    for x in range(number):
        try:
            re.compile(list_1[x])
            print(True)
        except re.error:
            print(False)