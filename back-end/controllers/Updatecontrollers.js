const db = require('../database/connect')
const updateProfile=async(req,res)=>{
    const {username,email,password,image}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashedpassword= await bcrypt.hash(password,salt)

    db.query(`SELECT * FROM user WHERE email = ?`,email,(err,resl)=>{
        if (resl.length) {
            res.status(409).send({
                 msg: "This email is already in use!",
            })
        } else{
            db.query(`INSERT INTO user (username,email,password,image) 
            VALUES ('${username}','${email}','${hashedpassword}','${image}')`,(erro,reslt)=>{
                if(erro)
                    res.send(erro)
                else   
                    res.status(201).send({msg: "The user has been registerd with us!",res:reslt.insertId});
            })
        
        }
    })
} 

const editPost=(req,res)=>{
    const{tags,title,context,image,cover_img,pub,user_id}=req.body
    db.query(`
        UPDATE  post set (id,tags,title,context,image,cover_img,pub,user_id) 
        values() where user_id='${user_id}'
    `)
}
const updateListitem=(req,res)=>{
    const{listid,post}=req.body
    let list;
    db.query(`
    select list from saved where id=${listid}`,
    (err,resl)=>{
        if(err){
            res.send(err);
        }
        else{
            list=JSON.parse(resl[0]["list"])
            list=list.push(post)
            db.query(`update saved set list=${JSON.stringify(list)}`,
            (erro,reslt)=>{
                if(erro) res.send(erro)
                else res.send(reslt)
            }) 
        }
    })
}
const updateList=(req,res)=>{
    const{id}=req.body 
    console.log(req.body );
    db.query(`
        update  saved set ? where id=${id}
       `,
        [req.body],
        (err,resl)=>{
            if(err) 
                res.send(err);
            else
                res.send(resl)
        }
    )
}

module.exports={updateProfile,editPost,updateList,updateListitem}