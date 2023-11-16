const express = require('express')
const app = express()
const route = express.Router()
const dataUsers = require('../models/Users')
const { register, login } = require('../controllers/auth-controller')


route.post('/regis', register)

route.post('/login', login)

module.exports = route