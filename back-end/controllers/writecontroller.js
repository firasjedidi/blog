const db = require('../database/connect')
const publish=(req,res)=>{
    const{tags,title,context,image,cover_img,pub,user_id}=req.body
    db.query(`
        insert into post (tags,title,context,image,cover_img,pub,user_id) 
        values('${tags}',${title},${context},${image},${cover_img},${pub},${user_id}) 
    `)
}
const autoUpdate=(req,res)=>{
    const{tags,title,context,image,cover_img,pub,user_id}=req.body
    db.query(`
        UPDATE  post set (id,tags,title,context,image,cover_img,pub,user_id) 
        values() where user_id='${user_id}'
    `)
}
const follow=(req,res)=>{
    const {follower,following,status}=req.body
    db.query(` insert into follow (follower,following,status) values(${follower},${following},${status})`)
}
const comment=(req,res)=>{
    const {comment,user_id,post_id}=req.body
    db.query(` insert into comment (comment,user_id,post_id) values(${comment},${user_id},${post_id})`)
}
const saved=(req,res)=>{
    db.query(
        `insert into saved 
         set ?`,[req.body],
         (err,resl)=>{
            if (err) {
                res.send(err)
             
            } else {
                res.send(resl)     
        }
    })
}

module.exports={publish,autoUpdate,follow,comment,saved}