var express=require('express');
var app=express();
var port=3000;
var fs=require('fs');//this engine requires fs module

app.engine('ntl',function(filepath,options,callback){
    fs.readFile(filepath,function(err,content){
        if(err) throw callback(err);
    });
});

app.listen(3000,()=>{
    console.log("Server Listening On Port 3000");
});