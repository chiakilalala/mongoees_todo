const header = require('../service/header');

const http ={
  cors(req,res){
    res.writeHead(200,header),
    res.end();
  },
  notFound(req,res){
    res.writeHead(404,header);
    res.write(JSON.stringify({
    "status":"false",
    "message":"路由不正確",
    "error":req.error
 }));
     res.end();   
  }   
}

module.exports =http;