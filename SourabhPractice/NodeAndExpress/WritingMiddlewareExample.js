var express=require('express');
var app=express();

//middleware function myLogger
var myLogger=function(req,res,next){
    console.log("LOGGED");
    next();
}

//middleware function requestTime
var requestTime=function(req,res,next){
    req.requestTime=Date.now();
    next();
}

app.use(myLogger);
app.use(requestTime);

app.get('/',function(req,res){
    var responseText = 'Hello World<br>';
    responseText+='<small>Requested At : '+req.requestTime+'</small>';
    res.send(responseText);
});
app.listen(3000);