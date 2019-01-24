# Enter your code here. Read input from STDIN. Print output to STDOUT

from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print(tag)
        for attribute in attrs:
            print('->', attribute[0], '>', attribute[1])
        
parser = MyHTMLParser()
for _ in range(int(input())):
    parser.feed(input())