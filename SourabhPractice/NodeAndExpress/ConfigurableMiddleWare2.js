var mw=require('./ConfigurableMiddleWare1');
var express=require('express');
var app=express();
var port=3000;

app.use(mw({option1:4,option2:2}));
app.get('/',(req,res)=>{
    res.send("This is Configurable Middleware");
});
app.listen(port);