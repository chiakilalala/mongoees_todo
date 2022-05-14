const mongoose = require('mongoose');
const dotenv =require('dotenv');
dotenv.config({path:'./config.env'});


const DB =process.env.DATABASE.replace('<password>', process.env.DATABASEPASSWORD)
   
   

mongoose
.connect(DB)
.then(() => console.log('資料庫連接成功'))
.catch((err)=>{
     console.log(err);
});
// mongoose
// .connect("mongodb://localhost:27017/testPost3")
// .then(()=>console.log('資料庫連接成功'))
// .catch((err)=>{
//      console.log(err);  
// })