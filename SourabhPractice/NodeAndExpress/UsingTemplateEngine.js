var express=require('express');
var app=express();
var port=3000;

app.set('view engine','pug');
app.set('views','./TemplateEngineViews');

app.get('/',(req,res)=>{
    res.render('index',{title:'Hey',message:'Hello Sourabh'});
});

app.listen(3000);