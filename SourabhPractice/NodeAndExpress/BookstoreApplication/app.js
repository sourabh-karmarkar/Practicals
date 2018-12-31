var express=require('express');
var app=express();
var mongoose=require('mongoose');

Genre=require('./models/genre');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore',{ useNewUrlParser: true });
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send("Hello World");
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err) throw err;
        res.send(genres);
    });
});

app.listen(3000,function(){
    console.log("Running on port 3000...");
});