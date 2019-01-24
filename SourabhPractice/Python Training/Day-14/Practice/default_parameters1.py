import pdb


def make_greeting(title, name, surname, formal=True):
    if formal:
        return "Hello %s %s!" % (title, surname)
    return "Hello, %s!" % name

pdb.set_trace()
print(make_greeting("Mr", "John", "Smith"))
print(make_greeting("Mr", "John", "Smith", False))
