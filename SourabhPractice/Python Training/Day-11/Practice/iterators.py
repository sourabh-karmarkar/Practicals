# we need to import the module in order to use it
import itertools

# unlike range, count doesnt't have an upper bound, and is not restricted to integers
for i in itertools.count(1):
    print(i) # 1,2,3...

for i in itertools.count(1,0.5):
    print(i) # 1.0,1.5,2.0...

# cycle repeats the value in another iterable over and over
for animal in itertools.cycle(["cat","dog"]):
    print(animal) # "cat","dog","cat","dog"...

# repeat repeats a single item
for i in itertools.repeat(1): # forever
    print(i) # 1,1,1,1....

for i in itertools.repeat(1,3): # or a set number of times
    print(i) # 1,1,1

# chain combines multiple iterables sequentially
for i in itertools.chain(numbers,animals):
    print(i) # print all the numbers and then animals