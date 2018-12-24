var mongoclient=require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db){
    if(err) throw err;
    console.log("Database Created");
    db.close();
});