try:
    age=int(input("Please Enter Your Age:"))
    if age<0:
        raise ValueError("%d is not a valid age. Age must be positive or zero."%age)
except ValueError as err:
    print("You entered incorrect age input %s"%err)
else:
    print("I see that you are %d years old."%age)