const express = require('express');
const router = express.Router();
const userController = require('./database/controller/UserController')

// User
router.post('/create', userController.create)
router.get('/read', userController.read)
router.post('/find', userController.find)
router.put('/update', userController.update)
router.delete('/delete', userController.del)


module.exports = router;