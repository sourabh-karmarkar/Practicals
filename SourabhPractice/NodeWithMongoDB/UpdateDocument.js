var mongoclient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");

    //Update single document
    //Update the document with the address "Valley 345" to name="Mickey Mouse" and address="Canyon 123":
    var myquery={address:"Valley 345"};
    var newvalues={$set:{name:"Mickey Mouse",address:"Canyon 123"}};
    dbo.collection("Customers").updateOne(myquery,newvalues,function(err,res){
        if(err) throw err;
        console.log("1 document updated");
    });

    var myquery1={address:/^G/};
    var newvalues1={$set:{name:"Minnie"}};
    //Update Many Documents
    dbo.collection("Customers").updateMany(myquery1,newvalues1,function(err,res){
        if(err) throw err;
        console.log(res.result.nModified+" documents have been updated");
        db1.close();
    });
});