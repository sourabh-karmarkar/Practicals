var formidable=require('formidable');
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url == '/fileupload'){
        var form= new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath=files.filetoupload.path;
            //select any file from the system. The file will be uploaded to the file server and moved at the below path.
            var newpath='/home/synerzip/Desktop/Practicals/Sourabh Practice/NodeJS/Formidable/'+files.filetoupload.name;
            fs.rename(oldpath,newpath,function(){
                if(err) throw err;
                res.write('File Uploaded And Moved');
                res.end();
            });
        });
    }
    else
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);