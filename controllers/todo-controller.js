let dataTodo = require('../models/todo-model')


module.exports = {
    getAll: (req,res)=>{
        res.json({
            data: dataTodo
        })
    },
    getTodoById: (req,res)=>{

        const id = req.params.id 

        const todo = dataTodo.find((item)=> item.id == id)

        res.json({
             data: todo
        })
    },
    addTodo: (req,res)=>{
        const newData = req.body

        const newTodo = {
            id: dataTodo.length +1,
            value: newData.value
        }

        dataTodo.push(newTodo)

        res.json({
            message: 'data berhasil ditambah'
        })
    },
    deleteById: (req,res)=>{
        let id = req.params.id
        const todoId = parseInt(id);

        const filteredData = dataTodo.filter(item => item.id !== todoId)

        res.json({
            message: 'data berhasil dihapus',
        })

        return dataTodo = filteredData
    }
}


    