const header = require('./header');

const successhandle = (res,data)=>{
    res.writeHead(200,header);
    res.write(JSON.stringify({
       "status":"sucess",
        data
    }))
    res.end();
}
module.exports =successhandle;