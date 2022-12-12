const router=require('express').Router()
const {updateProfile,editPost,updateList,updateListitem}=require('../controllers/Updatecontrollers')
router.put('/editProfile',updateProfile)
router.put('/editPost',editPost)
router.put('/updateList',updateList)
router.put('/updateListitem',updateListitem)
module.exports=router