var mysql=require('mysql');

var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "Practice"
});

//Inserting a single record
/*
var sql="insert into EMPLOYEE (designation,email,phone) values ('MANAGER','abc@gmail.com',12345);";
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
        con.query(sql,function(err,result)
        {
            console.log("Result : "+result+" ID :"+result.insertId");
      });
});
*/

//Inserting multiple records
con.connect(function(err){
    if(err) throw err;
    console.log('Connected!');
    var sql="insert into EMPLOYEE(designation,email,phone) values ?";
    var values=[
        ['DM','so@321',634354],
    ];

    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("Number of records inserted : "+result.affectedRows);
    });
});