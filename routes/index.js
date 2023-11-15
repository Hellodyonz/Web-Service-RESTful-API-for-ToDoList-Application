const express = require('express');
const route = express.Router()
const todoRoutes = require("./todo-routes");
const authRoutes = require('./auth-route');
const verifyToken = require('../middleware/auth');

route.use("/todos", todoRoutes) //,verifyToken
route.use("/auth", authRoutes)

route.get('/',(req,res)=>{
    res.json(
        {message: 'Gidion Bagas Prananta'}
    )
})
 
module.exports = route