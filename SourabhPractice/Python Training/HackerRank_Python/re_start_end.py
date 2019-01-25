import re
string, sub_s = input(), input()

pattern = re.compile(r'{}'.format(sub_s))

match = pattern.search(string)
if not match: print((-1, -1))
    
while match:
    print((match.start(), match.end() - 1))
    match = pattern.search(string, match.start() + 1)