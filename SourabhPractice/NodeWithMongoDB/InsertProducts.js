var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db('mydb');
    var myobj=[
        {_id:154,name:"Wheat Flour"},
        {_id:155,name:"Corn Flour"},
        {_id:156,name:"Groundnut Oil"}
    ];
    dbo.collection("Products").insertMany(myobj,function(err,res){
        if(err) throw err;
        console.log(res);
        db1.close();
    });
});