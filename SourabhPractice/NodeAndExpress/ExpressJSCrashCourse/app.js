var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var expressValidator=require('express-validator');
var mongojs=require('mongojs');
var db=mongojs('ExpressJSCrashCourse',['users']);
var ObjectId=mongojs.ObjectId;

var app=express();

/*
middle ware for logging
var logger=function(req,res,next){
    console.log("Logging...");
    next();
}

app.use(logger);
*/

//View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Satic Path
app.use(express.static(path.join(__dirname,'public')));

//Global Vars
app.use(function(req,res,next){
    res.locals.errors=null;
    next();
});

//Express Validator MiddleWare
app.use(expressValidator({
    errorFormatter:function(param,msg,value){
        var namespace = param.split('.'),
        root=namespace.shift(),
        formParam=root;

        while(namespace.length){
            formParam+='['+namespace.shift()+']';
        }
        return{
            param:formParam,
            msg:msg,
            value:value
        };
    }
}));

app.get('/',(req,res)=>{
    db.users.find(function(err,docs){
        res.render('index',{
            title:"Customers",
            users:docs
        });
    });
});

app.post('/users/add',(req,res)=>{
    req.checkBody('first_name','First Name Is Required').notEmpty();
    req.checkBody('last_name','Last Name Is Required').notEmpty();
    req.checkBody('email','Email Is Required').notEmpty();

    var errors=req.validationErrors();

    if(errors)
    {
        res.render('index',{
            title:"Customers",
            users:users,
            errors:errors
        });
    }
    else{
        var newuser={
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email
        };
        db.users.insert(newuser,function(err,result){
            if(err){
                console.log(err);
            }
            res.redirect('/');
        });
    }
});

app.delete('/users/delete/:id',function(req,res){
    db.users.remove({_id:ObjectId(req.params.id)},function(err,result){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

app.listen(3000,()=>{
    console.log("Server Started On PORT 3000");
});