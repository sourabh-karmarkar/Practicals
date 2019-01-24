n=3

if( ((n+1)%2 == 0) or ( n%2==0 and n >= 6 and n <= 20 )):
    print("Weird")
if( n%2 == 0 and ((n>20) or (n >= 2 and n <=5))):
    print("Not Weird")