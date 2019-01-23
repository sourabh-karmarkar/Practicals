numbers=[1,2,5,12,14,7,18]
animals=['aat','dog','mouse','lion']

# want to double each element in the list
doubles=[2*number for number in numbers]
print(doubles)

# want to print only the even numbers
even_number=[number for number in numbers if number % 2 == 0]
print(even_number)

# want to print only the even numbers
animal_list=[animal.title() for animal in animals if animal[0] in 'aeiou']
print(animal_list)