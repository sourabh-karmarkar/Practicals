"""
    Write a program which repeatedly prompts the user for an integer. If the integer is even,
    print the integer. If the integer is odd, don't print anything. Exit the program if the user
    enters the integer 99
"""

while True:
    number=int(input("Enter any integer : "))
    if number == 99:
        break
    if number % 2 == 0:
        print("Even Number : %d"%number)