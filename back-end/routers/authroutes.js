const router=require('express').Router()
const authcontrollers=require('../controllers/authcontrollers')
router.post('/signup',authcontrollers.signup)
router.post('/login',authcontrollers.login)
router.get('/logout',authcontrollers.logout)
module.exports=router