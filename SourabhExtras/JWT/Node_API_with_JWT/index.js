var express=require('express');
var jwt=require('jsonwebtoken');
const app=express();

app.get('/api',function(req,res){
    res.json({
        text:"Sourabh Karmarkar"
    });
});

app.post('/api/login',function(req,res){
    //auth user
    const user={id:3};
    const token=jwt.sign({user},'secret_key',{expiresIn:30});
    res.json({
        token:token
    });
});

app.get('/api/protected',ensureToken,function(req,res){
    jwt.verify(req.token,"secret_key",function(err,data){
        if(err){
            res.sendStatus(403);
        }
        else
        {
            res.json({
                text:"This is protected",
                data:data 
            });
        }
    });
});

function ensureToken(req,res,next){
    const bearerHeader=req.headers["authorization"];
    if(typeof bearerHeader!=='undefined')
    {
        const bearer=bearerHeader.split(" ");
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    }
    else
        res.sendStatus(403);
}

app.listen(3000,function(){
    console.log("App Listening On Port 3000...");
});