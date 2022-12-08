const { response } = require('express')
const express = require('express')
const { signup, login, verifytoken, getUser } = require('../controllers/User-controller')

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get("/user", verifytoken, getUser)

module.exports = router