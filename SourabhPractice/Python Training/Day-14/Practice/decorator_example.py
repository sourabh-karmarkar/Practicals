# we define a decorator


def log(original_function):
    def new_function(*args, **kwargs):
        print("Function %s is called with positional arguments %s\
         and keyword arguments %s.\n" % (
             original_function.__name__,
             args,
             kwargs))
        return original_function(*args, **kwargs)
    return new_function

# here is a function to decorate


@log  # applies the log decorator to print_a_message
def print_a_message(message):
    print(message)

# and here is how we decorate it
import pdb; pdb.set_trace()
# print_a_message = log(print_a_message)
print_a_message("Hello World")
