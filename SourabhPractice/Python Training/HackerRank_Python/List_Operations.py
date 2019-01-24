if __name__ == '__main__':
    N = int(input())

    # list for storing the actual commands
    command_list = []

    # take the commands from user and store to command_list
    for _ in range(N):
        command_list.append(input().split(" "))

    # list for executing the required commands
    actual_list=[]

    for command in command_list:

        # handling the insert command
        if command[0] == "insert":
            pos = int(command[1])
            value = int(command[2])
            actual_list.insert(pos, value)
        
        # handling the print command
        if command[0] == "print":
            print(actual_list)

        # handling the remove command
        if command[0] == "remove":
            actual_list.remove(int(command[1]))

        # handling the append command
        if command[0] == "append":
            actual_list.append(int(command[1]))

        # handling the pop command
        if command[0] == "pop":
            actual_list.pop()

        # handling the sort command
        if command[0] == "sort":
            actual_list.sort()

        # handling the reverse command
        if command[0] == "reverse":
            actual_list.reverse()