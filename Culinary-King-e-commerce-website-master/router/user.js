const user=require('../controller/user');
const express=require('express');
const fs=require('fs');
const path = require('path');
const router=express.Router();
router.use('/contact',user.contact);
router.use('/catering',user.catering);
//router.use('/enter_web',user.checkuser);
router.use('/summer',user.summer);
router.use('/about',user.about);
router.use('/index',user.index);
router.use('/',user.index);
module.exports=router;