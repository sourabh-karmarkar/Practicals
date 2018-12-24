var mongoclient=require('mongodb');
var url="mongodb://localhost:27017";

mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db('mydb');
    dbo.collection('Orders').aggregate([
        {$lookup:
            {
                from:'Products',
                localField:'product_id',
                foreignField:'_id',
                as:'order_details'
            }
        }
    ]).toArray(function(err,res){
        if(err) throw err;
        console.log(JSON.stringify(res));
        db1.close();
    });
});