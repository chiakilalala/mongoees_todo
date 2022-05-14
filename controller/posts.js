const Post = require('../models/posts');
const successhandle = require('../service/successhandle');
const errorhandle = require('../service/errorhandle');

const posts ={
  async getPost({req,res}){
    const AllPost =  await Post.find();
    successhandle(res,AllPost)
    res.end();
  },
  async createPost({body,req,res}){
    try {
      const data  = JSON.parse(body)
      if (data.content) {
      const newPost = await Post.create(
          {
            name: data.name,
            content: data.content,
            tags: data.tags,
            type: data.type
          })

          successhandle(res,newPost)
      }else{
          errorhandle(res)
      }
   
    } catch (err) {
          errorhandle(res,err)
        
    } 
  },
  async patchPost({body,req,res}){
    try {
      const data  = JSON.parse(body);
      const id =req.url.split('/').pop();
      if(id !== null && data.content !== undefined){
        const updatePost = await Post.findByIdAndUpdate(id,
          {
            name: data.name,
            content: data.content,
            tags: data.tags,
            type: data.type
          }, {
              new: true
          }
       )
        if (updatePost !== null){
          successhandle(res,updatePost)
        }else{
          errorhandle(res, "查無ID");
        }
      
      }else{
        errorhandle(err,"欄位錯誤");
      }
      //res.end();
     } catch (err) {
        errorhandle(res,err)
     } 
  }
}

module.exports =posts;