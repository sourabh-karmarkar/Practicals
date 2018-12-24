var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");
    dbo.createCollection("Customers",function(err,res){
        if(err) throw err;
        console.log("Collection Created");
        db1.close();
    });
});