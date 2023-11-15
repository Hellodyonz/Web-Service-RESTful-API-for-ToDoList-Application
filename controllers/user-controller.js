
const Users = require('../models/Users')

module.exports = {
    createUser: async(req,res)=>{
        let data = req.body
        try{
            const hash = bcrypt.hashSync(data.password, 10);
            data.password = hash
            await Users.create(data)

            res.json({
                message: 'berhasil membuat akun',
                data
            })

        } catch {
            res.json({
                message: 'gagal membuat akun'
            })
        }


        },
    getAllUser:async(req,res)=>{
        const users = await Users.findAll();

            res.json({
                users
            })
        },
    getUserById: async(req,res)=>{
        let itemId = req.params.id

        try{
            const user = await Users.findByPk(itemId, {
                attributes: ['id', 'name', 'password'],
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
    // deleteById: async(req,res)=>{
    //     let UserId = req.params.id;

    //     try {
    //         const deletedUser = await Users.destroy({
    //             where: {
    //                 id: UserId,
    //             },
    //         });
    
    //         if (deletedUser) {
    //             res.status(200).json({ message: 'Data user berhasil dihapus.' });
    //         } else {
    //             res.status(404).json({ message: 'Data user tidak ditemukan.' });
    //         }
    //     } catch (error) {
    //         console.error('Error saat menghapus data user:', error);
    //         res.status(500).json({ message: 'Gagal menghapus data user.' });
    //     }
    // },
    // deleteAllUser: async (req, res) => {
    //     try {
    //         const deletedCount = await Users.destroy({
    //             where: {},
    //             truncate: true, 
    //         });

    //         res.status(200).json({
    //             message: `Berhasil menghapus semua akun user`,
    //         });
    //     } catch (error) {
    //         console.error('Error saat menghapus semua akun user:', error);
    //         res.status(500).json({ message: 'Gagal menghapus semua akun user.' });
    //     }
    // },
}


    