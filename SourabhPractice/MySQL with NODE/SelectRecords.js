var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"Practice"
});

con.connect(function(err){
    if(err) throw err;
    con.query("select email,designation from EMPLOYEE",function(err,result,fields){
        if(err) throw err;
        //for(var i=0)
        console.log(result[4].designation);

        //fields[] is an array containing information about each field
        console.log(fields);
        console.log(fields[1].name);
        console.log(fields[1].db);
        console.log(fields[1].length);
        console.log(fields[1].orgName);
    });
});