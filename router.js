//  routes to controler 
const express = require('express')
const router = express.Router()
const control = require('./Controllers/controller.js')

router.get('/dataa', control.getData) 
router.post('/dataa', control.postData)

router.get('/login', control.getAllUsers); 
router.post('/login', control.signUp);
router.delete("/login/:name", control.deleteUser) // deleting from start of stack not end 


module.exports = router