var birds=require('./ExpressRouter/birds');
const express=require('express');
const app=express();

app.use('/birds',birds);

app.listen(3000,()=>console.log('Example App Listening on Port 3000'));