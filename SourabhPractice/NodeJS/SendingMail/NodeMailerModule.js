var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nodesourabh@gmail.com',
        pass:'node_sourabh123!'
    }
});

var mailoptions={
    from:'nodesourabh@gmail.com',
    to:'sourabh.karmarkar@synerzip.com',
    subject:'Hello...Sending Email Using Node JS',
    html:'<font size=20 color=blue>Hello Gayatri</font><h1>That is easy</h1>'
};

transporter.sendMail(mailoptions,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email Sent : '+info.response);
    }
});