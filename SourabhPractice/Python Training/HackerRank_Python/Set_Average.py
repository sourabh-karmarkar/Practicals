def average(array):
    number_set=set(array)
    cnt=len(number_set)
    return (sum(number_set)/cnt)
    

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)