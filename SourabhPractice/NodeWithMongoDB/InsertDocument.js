var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");
    var myobj={name:"PTC",address:"Vimannagar"};
    
    //insert a single document
    dbo.collection("Customers").insertOne(myobj,function(err,res){
        if(err) throw err;
        console.log("1 document inserted");
    });

    //insert many documents
    var recordsarray=[
        {name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'}
    ];
    dbo.collection("Customers").insertMany(recordsarray,function(err,res){
        if(err) throw err;
        console.log("Number Of Documents Inserted = "+res.insertedCount);
        db1.close();
    });
});