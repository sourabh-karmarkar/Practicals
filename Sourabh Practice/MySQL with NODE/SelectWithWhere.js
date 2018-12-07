var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"Practice"
})

con.connect(function(err){
    if(err) throw err;
    con.query("select * from EMPLOYEE where designation like 'GM' or email like 'neh%';",function(err,result){
        if(err) throw err;
        console.log(result);
    });
});