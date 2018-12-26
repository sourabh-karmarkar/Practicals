var express=require('express');
var app=express();
var port=3000;

//single call back function
app.get('/example/a',(req,res)=>{
    res.send("Hello From A");
});

//more than one callback function
app.get('/example/b',
    (req,res,next)=>
    {
        console.log('response will be sent by the next function!');
        next();
    },
    function(req,res)
    {
        res.send('Hello From B');
    }
);

//array of callback functions
var cb1=(req,res,next)=>{
    console.log('Callback Function 1');
    next();
}
var cb2=(req,res,next)=>{
    console.log('Callback Function 2');
    next();
}
var cb3=(req,res,next)=>{
    console.log('Response will be sent by the next function!');
    next();
}
var cb4=(req,res)=>{
    res.send('Hello From C');
}
app.get('/example/c',[cb1,cb2,cb3,cb4]);

app.listen(port,()=>{
    console.log("Listening To Port "+port);
});