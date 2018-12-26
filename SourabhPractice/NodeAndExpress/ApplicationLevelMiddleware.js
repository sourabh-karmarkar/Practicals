var express=require('express');
var app=express();
var port=3000;

//middleware function with no mount path
app.use(function(req,res,next){
    console.log('Time : ',new Date());
    next();
});

//middleware function mounted on /user/:id path
app.use('/user/:id',function(req,res,next){
    console.log('Request URL : ',req.originalUrl);
    next();
},function(req,res,next){
    console.log('Request Type : ',req.method);
    next();
});

app.get('/',function(req,res){
    res.send("Application Level Middleware 1st GET");
});

app.get('/user/:id',function(req,res){
    res.send("Application Level Middleware 2nd GET");
});
app.listen(port);