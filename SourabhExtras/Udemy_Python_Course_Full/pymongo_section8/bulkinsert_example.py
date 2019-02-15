from pymongo import MongoClient

myClient = MongoClient()
db = myClient.pytests_udemy
users = db.users

multiple_users = [{"username": "third", "password": "12345"},
                  {"username": "red", "password": "blue"},
                  {"username": "yellow", "password": "green"}]

inserted = users.insert(multiple_users)
print(inserted)
