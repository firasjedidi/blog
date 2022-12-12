const db = require('../database/connect')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')
const maxAge= 3*24*60*60
const createToken=(id)=>{
   return  jwt.sign({id},'shh',{expiresIn:maxAge})
}
const signup=async(req,res)=>{
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
                    var token= createToken(reslt.insertId)
                    res.cookie('jwt',token,{maxAge:maxAge*1000})
                    res.status(201).send({msg: "The user has been registerd with us!",res:reslt.insertId});
                    db.query(`insert into saved (list_name,user_id,list) values('Reading list',${reslt.insertId},${JSON.stringify([])})`)
            })
        
        }
    })
} 

 const login=(req,res)=>{
    const{email,password}=req.body;
   
    db.query(`SELECT * FROM user WHERE email = ?`,email,async(err,resl)=>{
        if (err) {
            res.status(409).send({
              msg: err,
            })}
        if (!resl.length) {
            res.status(409).send({
              msg: "This email is already in use!",
            })
        } else{
           
            const user = await bcrypt.compare(password,resl[0]["password"])
            if(user){
              var token= createToken(resl[0]["id"])
              res.cookie('jwt',token,{maxAge:maxAge,httpOnly:true})
              res.status(201).send({msg: "The user has been registerd with us!",res:resl[0],token});
            }
        }
    })
}
const logout=(req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.send('logout')
}
module.exports={
    signup,
    login,
    logout
}