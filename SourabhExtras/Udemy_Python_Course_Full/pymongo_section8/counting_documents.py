from pymongo import MongoClient

client = MongoClient()
db = client.pytests_udemy
Users = db.users

print(Users.find().count())
print(Users.find({"favorite_number": 445}).count())
print(Users.find({"favorite_number": 445, "username": "sourabh"}).count())
