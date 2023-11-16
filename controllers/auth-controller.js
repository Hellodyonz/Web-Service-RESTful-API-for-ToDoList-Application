const dataUsers = require('../models/Users')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    register: async(req,res)=>{

        const getData = req.body;
    
        try {
            const saltRounds = 10;
            const myPlaintextPassword = getData.password;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    
            getData.password = hash;
    
            let newUser = {
                name: getData.name, 
                email: getData.email,
                password: getData.password,
            }
    
            await dataUsers.create(newUser);
    
            res.json({
                message: 'Penambahan user berhasil'
            });
        } catch (error) {
            console.error('Error saat menambahkan user:', error);
            res.status(500).json({
                message: 'Terjadi kesalahan saat menambahkan user'
            });
        }
        
    },
    login: async(req,res)=>{
        const inputData = req.body

        const searchMail = await dataUsers.findOne({
            where: {
                email: inputData.email
            }
        });
    
        if(!searchMail){
            res.json({
                message: 'Email tidak terdaftar!' //
            })
            return
        }
    
        if(searchMail){
            if(bcrypt.compareSync(inputData.password, searchMail.password)){
                let token = jwt.sign({email:searchMail.email}, 'secret');
                res.json({
                    message: 'Login Berhasil',
                    token
                })
                return
            } else {
                res.json({
                    message: 'Password yang dimasukkan salah'
                })
                return
            }
        }}

}