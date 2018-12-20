var http = require('http');
var dt=require('./ModuleDateTime');
var url=require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("URL is : "+req.url);
    //Use the url module to turn the querystring into an object
    var q=url.parse(req.url,true).query;
    //Return the year and month of the query object
    var txt=q.year+" "+q.month;
    res.write("\n"+txt);
    //import a date and time module and print the date on the browser
    res.write("\nThe Current Date And Time Is : "+dt.myDateTime());
    res.end('Hello World!');
}).listen(8089);
