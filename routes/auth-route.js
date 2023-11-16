const express = require('express')
const app = express()
const route = express.Router()
const dataUsers = require('../models/Users')
const { register, login } = require('../controllers/auth-controller')
// var jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

route.post('/regis', register)

route.post('/login', login)

// route.get('/',(req,res)=>{
//     res.json({
//         data: dataUsers
//     })
// })




module.exports = route