import requests

my_data = {"name": "Sourabh", "email": "sourabh@gmail.com"}
r = requests.post("http://www.w3schools.com/php/welcome.php", data=my_data)

f = open("myFile.html", "w+")
f.write(r.text)

# not working properly. Have put a question on udemy. Section 6 Lecture 58
