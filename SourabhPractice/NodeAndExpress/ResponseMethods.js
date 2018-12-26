var express=require('express');
var app=express();
var port=3000;

//res.download()
app.get('/downloadmethod',(req,res)=>{
    res.download(__dirname+'/download_abc.txt');
});

//res.end()
app.get('/endmethod',(req,res)=>{
    res.end("End Method Is Called");
});

//res.json()
app.get('/jsonmethod',(req,res)=>{
    res.json({name:"Sourabh",age:"24",address:"Prabhat Road, Erandwane, Pune 411004"});
});

//res.jsonp()
app.get('/jsonpmethod',(req,res)=>{
    res.jsonp({method:"jsonp",name:"Sourabh",age:"24",address:"Prabhat Road, Erandwane, Pune 411004"});
});

//res.jsonp()
app.get('/jsonpmethod',(req,res)=>{
    res.jsonp({method:"jsonp",name:"Sourabh",age:"24",address:"Prabhat Road, Erandwane, Pune 411004"});
});

//res.redirect()
app.get('/redirectmethod',(req,res)=>{
    res.redirect('https://www.google.com/');
});

//res.sendFile()
app.get('/sendfilemethod/:name',(req,res,next)=>{
    var options={
        root:__dirname,
        dotfiles:'deny',
        headers:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    };
    var filename=req.params.name;
    res.sendfile(filename,options,function(err){
        if(err)
            next(err);
        else
            console.log('Sent:',filename);
    });
});

//res.sendStatus()
app.get('/sendstatusmethod',function(req,res){
    res.sendStatus(400);
});

app.listen(port,()=>{
    console.log("Listening to port : "+port);
});