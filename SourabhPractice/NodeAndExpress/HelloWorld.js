const express=require('express');
const app=express();
const port=3000;

app.all('/Sourabh',(req,res)=>{
    //If you want to render a html page
    //res.sendFile(__dirname + '/[file_name].html');
    res.send("Hello World");
});
app.listen(port,()=>console.log('Example App Listening on Port '+port));