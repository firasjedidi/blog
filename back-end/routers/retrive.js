const router=require('express').Router()
const {search,tagsSearch,comments,list,lists,followingOrNot,post,user}=require('../controllers/retrivecontrollers')
router.get("/search/",search)
router.get("/tagsSearch/",tagsSearch)
router.get("/comments/",comments)
router.get("/lists/:name",list)
router.get("/list/:id",lists)
router.get("/followingOrNot/",followingOrNot)
router.get("/posts/",post)
router.get("/user/:id",user)
module.exports=router