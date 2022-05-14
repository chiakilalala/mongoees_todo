
const header = require('./header');
const errorhandle =(res,err)=>{
    res.writeHead(400,header);
    let message = '?????';
    if(err){
       err.message
    }else{
      message ='沒此欄位id填錯'
    }
    res.write(JSON.stringify({
      "status":"false",
       message
   }));
   res.end();
}





module.exports =errorhandle;