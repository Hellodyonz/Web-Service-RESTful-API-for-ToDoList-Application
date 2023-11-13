const express = require('express');
const route = express.Router()
const todoRoutes = require("./todo-routes")
const authRoutes = require('./auth-route');
const verifyToken = require('../middleware/auth');

route.use("/todos",verifyToken, todoRoutes)
route.use("/auth", authRoutes)
 
module.exports = route