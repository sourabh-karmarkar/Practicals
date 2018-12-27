var express=require('express');
var app=express();
var port=3000;

app.get('/',(req,res)=>{
    throw new Error("BROKEN");
});
app.listen(3000);