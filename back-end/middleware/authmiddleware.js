const jwt=require('jsonwebtoken')
const db=require('../database/connect')
//verifie the token 
const requireToken=(req,res,next)=>{
    const token=req.cookies.jwt
    console.log(token)
    if(token){
        jwt.verify(token,'shh',(err,decodedToken)=>{
            if(err) 
                res.status(400).send('not authorised')
            else
                console.log(decodedToken,"work")
                next()
        })
    }else{
        res.status(400).send('not authorised')
    }

}
//check current user && check how res.local works with react
const checkUser=(req,res,next)=>{
    const token=req.cookies.jwt;
    console.log(token)
    if(token){
        jwt.verify(token,'shh',(err,decodedToken)=>{
            if(err){ 
                res.status(400).send('not authorised');
            
                res.locals.user=null;
                next();
            }else{
                db.query('',decodedToken.id,(err,resl)=>{
                    if(err){
                        res.status(400).send('not founed');
                        res.locals.user=null;
                    }else{
                        res.locals.user=resl;
                        next();
                    }
                })
              
            }
        })
    }else{
        res.status(400).send('not authorised')
    }

}
module.exports={requireToken,checkUser}