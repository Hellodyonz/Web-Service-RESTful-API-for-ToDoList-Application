const express = require('express')
const app = express()
const route = express.Router()
const { getAll, getTodoById, addTodo, deleteById, deleteAllTodo, getTodoDetailById } = require('../controllers/todo-controller')

route.get('/', getAll)
route.get('/:id', getTodoById)
route.get('/:id/detail', getTodoDetailById)
route.post('/', addTodo)
route.delete('/:id', deleteById)
route.delete('/', deleteAllTodo)

module.exports = route