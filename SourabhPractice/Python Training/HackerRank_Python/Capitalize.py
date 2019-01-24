#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    str_2=""
    list_capital=[word.capitalize() for word in s.split(" ")]
    for word in list_capital:
        str_2+=word+" "
    return str_2

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()
