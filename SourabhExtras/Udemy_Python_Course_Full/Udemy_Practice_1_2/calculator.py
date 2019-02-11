"""
    Program: Magical Calculator
    Author: Sourabh Karmarkar
    Copyright: 2019
"""


import re

print("Our Magical Calculator")
print("Type 'quit' to exit\n")

previous = 0
run = True


def perform_math():
    global run
    global previous
    equation = ""

    # If there has been previous calculation, use that result as the prompt
    if previous == 0:
        equation = input("Enter Equation : ")
    else:
        equation = input(str(previous))

    # if user quits -->
    if equation == 'quit':
        print("GoodBye!!")
        run = False
    else:
        equation = re.sub('[a-zA-Z,.:()" "]', '', equation)
        if previous == 0:
            previous = eval(equation)
        else:
            previous = eval(str(previous) + equation)


while run:
    perform_math()
