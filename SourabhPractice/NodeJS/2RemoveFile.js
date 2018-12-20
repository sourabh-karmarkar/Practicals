var fs=require('fs');
fs.unlink('NewFile.txt',function(err){
    if(err) throw err;
    console.log("File Deleted");
});