import datetime
from pymongo import MongoClient

client = MongoClient()
db = client.pytests_udemy
Users = db.users

currentDate = datetime.datetime.now()
print(currentDate)

old_date = datetime.datetime(2009, 4, 11)

# First insert the current date and the old date
# uid = Users.insert({"username": "amit", "date": currentDate})
# uid = Users.insert({"username": "amit", "date": old_date})

# find records that are after the old date i.e old_date < new_date
print(Users.find({"date": {"$gte": old_date}}).count())

# find records that are before the old date i.e old_date > new_date
print(Users.find({"date": {"$lte": old_date}}).count())

# find if the document with the specified condition exists
print(Users.find({"date": {"$exists": True}}).count())

# find all documents which are not equal to the specified condition
print(Users.find({"username": {"$ne": "sourabh"}}).count())
