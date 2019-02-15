from pymongo import MongoClient

client = MongoClient()
db = client.pytests_udemy

# First create the index
# db.users.create_index([("username", pymongo.ASCENDING)])

print(db.users.find({"username": "sourabh"}))
