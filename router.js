//  routes to controler 
const express = require('express')
const router = express.Router()
const control = require('./Controllers/controller.js')

router.get('/dataa', control.getData) 
router.post('/dataa', control.postData)

router.get('/loginUsers', control.getAllUsers); // for testing 
router.post('/login', control.signUp);

module.exports = router