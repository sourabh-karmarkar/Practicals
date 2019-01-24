# Instance Attributes
class Person:

    def __init__(self, title, name, surname):
        self.title = title
        self.name = name
        self.surname = surname

    def fullname(self):
        if hasattr(self, "_fullname"):
            return self._fullname

        fullname = "%s %s" % (self.name, self.surname)
        self._fullname = fullname
        return fullname

person_object = Person("Mr", "John", "Smith")
print(person_object.name)
print(person_object.title)
print(person_object.surname)
print(person_object.fullname())


class Person1:
    TITLES = ('Dr', 'Mr', 'Mrs', 'Ms')

    def __init__(self, title, name, surname):
        if title not in self.TITLES:
            raise ValueError("%s is not a valid title." % title)

        self.title = title
        self.name = name
        self.surname = surname

person_object1 = Person1("Mr", "John", "Smith")
import pdb; pdb.set_trace()
print(person_object1.title)
print(person_object1.name)
print(person_object1.surname)
