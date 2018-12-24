var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");
    
    //sort ascending
    var mysorta={name:1};
    //sort descending
    var mysortd={name:-1};

    dbo.collection("Customers").find().sort(mysortd).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db1.close();
    });
});