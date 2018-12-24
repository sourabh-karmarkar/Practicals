var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");
    var query={address:/^A/};
    dbo.collection("Customers").find(query).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db1.close();
    });
});