var mongoclient=require('mongodb');
var url="mongodb://localhost:27017";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db('mydb');
    dbo.collection("Products").drop(function(err,delOK){
        if(err) throw err;
        if(delOK) console.log("Collection Deleted");
        db1.close();
    });
});