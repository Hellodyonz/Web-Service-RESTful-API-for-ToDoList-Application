const express = require('express')
const app = express()
const route = express.Router()
const { getAll, getTodoById, addTodo, deleteById } = require('../controllers/todo-controller')

route.get('/', getAll)
route.get('/:id', getTodoById)
route.post('/', addTodo)
route.delete('/:id', deleteById)

module.exports = route