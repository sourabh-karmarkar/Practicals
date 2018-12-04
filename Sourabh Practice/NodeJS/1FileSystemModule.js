var fs=require('fs');
var http=require('http');

var readhtmlfile=function(){
    http.createServer(function(req,res){
        fs.readFile('ReadFile.html',function(err,data){
            res.write(data);
            res.end();
        });
    }).listen(8080);
}

fs.open('NewFile.txt','w',function(err){
    if(err) throw err;
    console.log("File Opened And Created!");
});

fs.writeFile('NewFile.txt','1)Hello Mahesh',function(err){
    if(err) throw err;
    console.log("1)File Rewritten And Data Replaced!");
});

fs.appendFile('NewFile.txt','\n2)Hello Sourabh',function(err){
    if(err) throw err;
    console.log("2)Append Data to existing file!");
});

readhtmlfile();