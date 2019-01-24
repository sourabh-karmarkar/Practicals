import pdb


def print_a_message(message):
    print(message)


print_a_message("Hello World")
print_a_message("Hi, I am Joe`")


def print_sum(a, b):
    print(a + b)

pdb.set_trace()
# print_sum()  # this wont work
print_sum(2, 3)
