
const Users = require('../models/Users')

module.exports = {
    getAllUser: async(req,res)=>{
        const users = await Users.findAll();

        try{
            res.status(200).json({
                Users
            })
        } catch{
            res.status(404).json({
                message: "tidak dapat mendapatkan data"
            })
        }
    },
    getUserById: async(req,res)=>{

        let itemId = req.params.id

        try{
            const user = await Users.findByPk(itemId, {
                attributes: ['id', 'name'],
            });

            res.json({
                user
            })

        }catch(error){
            res.json({
                message: 'Gagal mendapatkan data',
                error
            })
        }

    },
    addUser: async(req,res)=>{
        let data = req.body

        try{
            await Users.create(data)

            res.status(201).json({
                message: 'berhasil menambah user',
                data
            })

        } catch {
            res.status(400).json({
                message: 'gagal menambah user'
            })
        }
    },
    deleteById: async(req,res)=>{
        let UserId = req.params.id;

        try {
            const deletedUser = await Users.destroy({
                where: {
                    id: UserId,
                },
            });
    
            if (deletedUser) {
                res.status(200).json({ message: 'Data user berhasil dihapus.' });
            } else {
                res.status(404).json({ message: 'Data user tidak ditemukan.' });
            }
        } catch (error) {
            console.error('Error saat menghapus data user:', error);
            res.status(500).json({ message: 'Gagal menghapus data user.' });
        }
    },
    deleteAllUser: async (req, res) => {
        try {
            const deletedCount = await Users.destroy({
                where: {},
                truncate: true, 
            });

            res.status(200).json({
                message: `Berhasil menghapus semua akun user`,
            });
        } catch (error) {
            console.error('Error saat menghapus semua akun user:', error);
            res.status(500).json({ message: 'Gagal menghapus semua akun user.' });
        }
    },
}


    