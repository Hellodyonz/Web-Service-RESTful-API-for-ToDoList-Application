const express = require('express');
const route = express.Router()
const todoRoutes = require("./todo-routes");
const authRoutes = require('./auth-route');
const userRoutes = require('./user-routes')
const verifyToken = require('../middleware/auth');

route.use("/todos",verifyToken, todoRoutes)
route.use("/auth", authRoutes)
route.use('/users', userRoutes)

route.get('/',(req,res)=>{
    res.json({
        message: 'Gidion Bagas Prananta',
        dokumentasi: 'untuk dokumentasi bisa dilihat di ---> https://github.com/Hellodyonz/Web-Service-RESTful-API-for-ToDoList-Application'
    })
})
 
module.exports = route