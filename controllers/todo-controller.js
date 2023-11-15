
const Todos = require('../models/Todos')



module.exports = {
    getAll: async(req,res)=>{
        const todos = await Todos.findAll();

        try{
            res.status(200).json({
                todos
            })
        } catch{
            res.status(404).json({
                message: "tidak dapat mendapatkan data"
            })
        }
    },
    getTodoById: async(req,res)=>{

        let itemId = req.params.id

        try{
            const todo = await Todos.findByPk(itemId, {
                attributes: ['id', 'value'],
            });

            res.json({
                todo
            })

        }catch(error){
            res.json({
                message: 'Gagal mendapatkan data',
                error
            })
        }

        
    },
    getTodoDetailById: async(req,res)=>{

        let itemId = req.params.id

        try{
            const todo = await Todos.findByPk(itemId, {
                attributes: ['id', 'value','createdAt','updatedAt','user_id'],
            });

            res.json({
                todo
            })

        }catch(error){
            res.json({
                message: 'Gagal mendapatkan data',
                error
            })
        }

        
    },
    addTodo: async(req,res)=>{
        let data = req.body

        try{
            await Todos.create(data)

            res.status(201).json({
                message: 'berhasil menambah data',
                data
            })

        } catch {
            res.status(400).json({
                message: 'gagal menambah data'
            })
        }
    },
    deleteById: async(req,res)=>{
        let TodoId = req.params.id;

        try {
            const deletedTodo = await Todos.destroy({
                where: {
                    id: TodoId,
                },
            });
    
            if (deletedTodo) {
                res.status(200).json({ message: 'Data user berhasil dihapus.' });
            } else {
                res.status(404).json({ message: 'Data user tidak ditemukan.' });
            }
        } catch (error) {
            console.error('Error saat menghapus data user:', error);
            res.status(500).json({ message: 'Gagal menghapus data user.' });
        }
    },
    deleteAllTodo: async (req, res) => {
        try {
            const deletedCount = await Todos.destroy({
                where: {},
                truncate: true, 
            });

            res.status(200).json({
                message: `Berhasil menghapus semua data todo.`,
            });
        } catch (error) {
            console.error('Error saat menghapus semua data todo:', error);
            res.status(500).json({ message: 'Gagal menghapus semua data todo.' });
        }
    },
}


    