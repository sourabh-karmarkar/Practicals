var url=require('url');
var adr='http://localhost:8080/default.htm?year=2017&month=february';
var q=url.parse(adr,true);

console.log("Host = "+q.host);//returns 'localhost:8080'
console.log("Path = "+q.pathname);//return '/default.htm'
console.log("Values = "+q.search);//returns '?year=2017&month=february'

var qdata=q.query; //returns an object
console.log(qdata.month);