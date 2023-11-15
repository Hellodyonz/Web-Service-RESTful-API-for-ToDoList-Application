const express = require('express')
const { getAllUser, getUserById, addUser, deleteById, deleteAllUser } = require('../controllers/user-controller')
const app = express()
const route = express.Router()


route.get('/', getAllUser)
route.get('/:id', getUserById)
route.post('/', addUser)
route.delete('/:id', deleteById)
route.delete('/', deleteAllUser)

module.exports = route