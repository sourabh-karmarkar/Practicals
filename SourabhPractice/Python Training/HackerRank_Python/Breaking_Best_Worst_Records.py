#!/bin/python3

import os

# Complete the breakingRecords function below.
def breakingRecords(scores):
    
    # take first score in the array as max and min
    min = scores[0]
    max = scores[0]
    
    maxcount = 0
    mincount = 0

    for i in range(1, len(scores)):
        
        # increment the max/min counters as per the record broken by Maria
        if scores[i] > max:
            max = scores[i]
            maxcount = maxcount + 1
        if scores[i] < min:
            min = scores[i]
            mincount = mincount + 1

    return [maxcount,mincount]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()

