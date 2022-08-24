const express = require('express')
const router = express.Router()
const { registerUser, LoginUser } = require('../controllers/userController')
router.post('/', registerUser)

router.post('/login', LoginUser)

module.exports = router
