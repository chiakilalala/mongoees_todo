

const PostController = require('../controller/posts');

const HttpController = require('../controller/http');

const DeleteController =  require('../controller/delete');

const routes = async (req,res)=>{
  const  {url,method} = req;
  let body='';
  req.on('data',chunk=>{
        body+=chunk
  })

if(url =='/posts'&& method =='GET'){
    PostController.getPost({req,res})
}else if(url =='/posts'&& method =='POST'){
    req.on('end',async()=>{   
        PostController.createPost({body,req,res})
    })
}else if(url.startsWith('/posts/')&& method =='PATCH'){
    req.on('end',async()=>{ 
        PostController.patchPost({body,req,res})
    })
}else if(req.url.startsWith('/posts/')&& req.method=="DELETE"){
    DeleteController.deleteOneById({req,res})
}
else if(req.url =='/posts'&& req.method =='DELETE'){
    DeleteController.deletePost({req,res})

}else if(req.method =='OPTIONS'){
    HttpController.cors(req,res)
}else{
    HttpController.notFound(req,res)
}
}

module.exports =routes;

