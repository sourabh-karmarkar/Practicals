from pymongo import MongoClient

myClient = MongoClient()
db = myClient.pytests_udemy
users = db.users
user1 = {"username": "sourabh", "password": "securepassword", "favorite_number": 445, "hobbies": ["python", "games", "pizza"]}
user_id = users.insert_one(user1).inserted_id
print(user_id)
