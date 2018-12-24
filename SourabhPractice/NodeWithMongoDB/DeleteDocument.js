var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db){
    if(err) throw err;
    var dbo=db.db('mydb');
    var myquery={address:"Kothrud"};
    
    //Delete One Document
    dbo.collection("Customers").deleteOne(myquery,function(err,res){
        if(err) throw err;
        console.log("1 document deleted");
    });

    //Delete Many Documents
    var deletemanyquery={address:/^O/};
    dbo.collection("Customers").deleteMany(deletemanyquery,function(err,result1){
        if(err) throw err;
        console.log("no of documents deleted : "+result1.result.n);
        db.close();
    });

});