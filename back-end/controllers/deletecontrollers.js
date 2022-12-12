const db = require('../database/connect')
const deletePost=(req,res)=>{
    const{id}=req.body
    db.query(`
        delete from  post where id=${id}
    `,(err,resl)=>{
        if(err) res.send(err)
        else res.send(resl)
    })
}
const deleteList=(req,res)=>{
    const{id}=req.params
    db.query(`
        delete from  saved where id=${id}
    `,(err,resl)=>{
        if(err) res.send(err)
        else res.send(resl)
    })
}
const deleteFromList=(req,res)=>{
    // const{id}=req.body
    let list;
    db.query(`
    select list from saved where id=${1}`,
    (err,resl)=>{
        if(err){
            res.send(err);
        }
        else{
            list=JSON.parse(resl[0]["list"])
            list=list.splice(1,1)
            db.query(`update saved set list=${JSON.stringify(list)}`,
            (erro,reslt)=>{
                if(erro) res.send(erro)
                else res.send(reslt)
            }) 
        }
    })
}

const unfollow=(req,res)=>{
    const {follower,following}=req.body
    db.query(`delete from  follow where follower=${follower} and following=${following}`,
        (err,resl)=>{
            if(err) res.send(err)
            else res.send(resl)
    })
}
module.exports={deleteFromList,deleteList,deletePost,unfollow}