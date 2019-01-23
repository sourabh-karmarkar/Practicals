"""
    Write a python program to find the sum of diagonals and return the difference of their sum.
    Matrix dimension will be entered by the user.
"""

def diagonal_sum(dimension):

    # initializing matrix values to zero at first
    matrix = [[0]*dimension for i in range(dimension)]

    # accept each value from the user and store in the matrix
    for x in range(0,dimension):
        for y in range(0,dimension):
            matrix[x][y]=int(input("Enter value (%d row : %d column) : "%(x+1,y+1)))
    
    leftsum=0
    rightsum=0
    count=dimension-1

    # find out the left sum and the right sum of the matrix
    for x in range(0,dimension):
        for y in range(0,dimension):
            if(x==y):
                leftsum+=matrix[x][y];
        rightsum+=matrix[x][count]
        count-=1;

    print("Left Sum = %d"%leftsum)
    print("Right Sum = %d"%rightsum)

    # return the difference of the sums
    return leftsum-rightsum

# Accepting dimensions from the user
dimension=int(input("Enter the dimension of the matrix : "))
diagonal_difference=diagonal_sum(dimension)
print("Difference of the sum of diagonal is %d"%diagonal_difference)