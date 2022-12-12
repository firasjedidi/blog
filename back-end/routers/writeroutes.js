const router=require('express').Router()
const {autoUpdate,publish,follow,comment,saved}=require('../controllers/writecontroller')
router.put('/write',autoUpdate)
router.post('/publish',publish)
router.post('/follow',follow)
router.post('/comment',comment)
router.post('/saved',saved)
module.exports=router