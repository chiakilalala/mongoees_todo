
const routes =require('./routes')
require('./utils')

// schema 結束
const app = async(req, res)=>{
    routes(req,res)
   
}

module.exports = app;
