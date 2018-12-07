var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"Practice"
});

var email="abc@gmail.com";
var sql="select * from EMPLOYEE where email like "+mysql.escape(email);
var sql1="select * from EMPLOYEE where email like ?";
var sql2="select * from EMPLOYEE order by email";
con.connect(function(err){
    if(err) throw err;
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        con.query(sql1,[email],function(err){
            if(err) throw err;
            console.log(result);
            //order by
            con.query(sql2,function(err,result){
                if(err) throw err;
                console.log(result);
            });
        });
    });
});