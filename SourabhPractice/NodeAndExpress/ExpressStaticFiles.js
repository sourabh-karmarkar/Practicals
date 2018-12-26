const express=require('express');
const app=express();
const port=3000;

//include the images folder. All the static filed can directly be accessed by the filename
app.use(express.static('imagesfolder'));
app.listen(port,()=>console.log('Example App Listening on Port '+port));