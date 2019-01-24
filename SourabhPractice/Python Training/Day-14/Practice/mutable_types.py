def add_pet_to_list(pet, pets=[]):
    pets.append(pet)
    return pets

list_with_cat = add_pet_to_list("cat",[])
list_with_dog = add_pet_to_list("dog",[])

print(list_with_cat)
print(list_with_dog)  # oops
