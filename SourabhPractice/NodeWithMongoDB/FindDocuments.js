var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";
mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");
    
    //find a single document
    dbo.collection("Customers").findOne({},function(err,res){
        if(err) throw err;
        console.log("Find A Single Document : "+res.name+"\n");
    });

    //find multiple documents
    dbo.collection("Products").find({},{projection : {_id:0,name:1}}).toArray(function(err,result){
        if(err) throw err;
        console.log("Showing Multiple Documents\n");
        console.log(result);
        db1.close();
    });
});
