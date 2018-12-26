const express=require('express');
const app=express();
const port=3000;

app.get('/users/:userID/books/:bookID',(req,res)=>{
    var user=req.params.userID;
    var book=req.params.bookID;
    res.send("User ID = "+user+"<br>Book ID = "+book);
});

//Using . and -

app.get('/flights/:from-:to/user/address/:state.:city',(req,res)=>{
    var fromLocation=req.params.from;
    var toLocation=req.params.to;
    var userstate=req.params.state;
    var usercity=req.params.city;
    res.send("Source = "+fromLocation+"<br>Destination = "+toLocation+"<br>State = "+userstate+"<br>City = "+usercity);
});

app.listen(port,()=>console.log('Example App Listening on Port '+port));