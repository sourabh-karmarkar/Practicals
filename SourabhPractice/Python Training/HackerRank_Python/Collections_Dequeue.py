# Enter your code here. Read input from STDIN. Print output to STDOUT

from collections import deque
import collections

d = deque()

N = int(input())
# list for storing the actual commands
command_list = []
# take the commands from user and store to command_list
for _ in range(N):
    command_list.append(input().split(" "))

# list for executing the required commands
actual_list=[]

for command in command_list:

    # handling the append command
    if command[0] == "append":
        d.append(command[1])
    
    # handling the appendleft command
    if command[0] == "appendleft":
        d.appendleft(command[1])

    # handling the pop command
    if command[0] == "pop":
        d.pop()
    
    # handling the appendleft command
    if command[0] == "popleft":
        d.popleft()

# convert the dequeue in list
for x in list(collections.deque(d)):
    print(x,end=" ")