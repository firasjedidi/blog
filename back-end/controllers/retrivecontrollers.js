const db=require('../database/connect')
const data=[	{
    "namefirst": "Jefferson",
    "namelast": "Dibbs",
    "email": "hackerhundredweight@hadedyews.info",
    "username": "latentsintramural",
    "age": "38",
    "country": ["javascript","tecnology","programing"]
},
{
    "namefirst": "Levi",
    "namelast": "Bothe",
    "email": "extinguished@scoreboards.info",
    "username": "erogenouschuckles",
    "age": "97",
    "country": ["business","money"]
},
{
    "namefirst": "Cory",
    "namelast": "Steyn",
    "email": "provablytownincidences@Waldosawdustextemporizing.gov",
    "username": "infallibilitys",
    "age": "90",
    "country": ["art","panit"]
},
{
    "namefirst": "Aron",
    "namelast": "Lugli",
    "email": "sapsAchernarsbelts@speccingunlatches.edu",
    "username": "morbiditysdebars",
    "age": "44",
    "country": ["personality","health"]
},
{
    "namefirst": "Tobias",
    "namelast": "Yeremian",
    "email": "trademarksdeacons@Veronicanonetheless.org",
    "username": "businesses",
    "age": "60",
    "country": ["psycology"]
}]

const search =(req,res)=>{
    const {q}=req.query
    // let  user=await db.query("")
    // let  title=await db.query("")
    const keys=['username','namefirst','age']
    let filter=data.filter((obj)=>keys.some((key)=>obj[key].toLowerCase().includes(q))) 
    res.send(filter.splice(0,3))    
}

const tagsSearch=async(req,res)=>{
    const keys=['tags']
     db.query("select * from post",(err,resl)=>{
        if(err)console.log(err);
        else {
            let filter = resl.filter((obj)=>keys.some((key)=>obj[key].toLowerCase().includes('why'))) 
            console.log(filter);
    }
     })
}

const post=(req,res)=>{
     db.query("select * from post",(err,resl)=>{
        if(err)console.log(err);
        else 
         console.log(resl);
     }) 
}


const followingOrNot=(req,res)=>{   
    const {follower,following}=req.body
    db.query(`select * from follow where follower=${follower} and following=${following}`,
        (err,resl)=>{
            if(err) console.log(err);
            else console.log(resl);
    })
}
const list=(req,res)=>{
    const {name}=req.params
    db.query(`select * from saved where list_name='${name}' `,
        (err,resl)=>{
            if(err) res.send(err);
            else res.send(resl);
    })
}
const lists=(req,res)=>{
    const {id}=req.params
    console.log(id);
    db.query(`select * from saved where user_id=${id} `,
        (err,resl)=>{
            if(err) res.send(err);
            else res.send(resl);
    })
}
const comments=(req,res)=>{
    const {post_id}=req.body
    db.query(`select * from comment where post_id=${post_id} `,
        (err,resl)=>{
            if(err) console.log(err);
            else console.log(resl);
    })
}

const user=(req,res)=>{
    const {id}=req.params
    db.query(`select * from user where id=${id} `,
        (err,resl)=>{
            if(err) res.send({msg:err});
            else res.send(resl);
    })
}
module.exports={
    search,
    tagsSearch,
    comments,
    list,
    followingOrNot,
    post,
    user,
    lists
}