const Post = require('../models/posts');
const successhandle = require('../service/successhandle');
const errorhandle = require('../service/errorhandle');


const deletePosts ={

  async deletePost({req,res}){
    const AllPost = await  Post.deleteMany({})
    successhandle(res, AllPost)
    console.log(AllPost)
    
  },
  async deleteOneById({req,res}){
    try {
        const id =req.url.split('/').pop();
        const delPost = await Post.findByIdAndDelete(id);
        if(delPost !== null){
          successhandle(res,delPost);
        }else{
          errorhandle(res,"")
        }
    } catch (err) {
      errorhandle(res,err)
    }

  }

}


module.exports =deletePosts;