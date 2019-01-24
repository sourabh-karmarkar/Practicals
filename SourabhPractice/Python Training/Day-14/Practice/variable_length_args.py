# args recieves the values as tuple
def print_args(*args):
    for arg in args:
        print(arg)

# kwargs recieves the key and values as dictionary
def print_kwargs(**kwargs):
    for k, v in kwargs.items():
        print("%s : %s" % (k, v))

print_args("one", "two", "three")
print_args("one", "two", "three", "four")

import pdb; pdb.set_trace()
print_kwargs(name="Jane", surname="Doe")
print_kwargs(age=10)