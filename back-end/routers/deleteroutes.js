const router=require('express').Router()
const {deleteFromList,deleteList,deletePost}=require('../controllers/deletecontrollers')
router.delete('/post',deletePost)
router.delete('/list/:id',deleteList)
router.delete('/listitem',deleteFromList)
module.exports=router