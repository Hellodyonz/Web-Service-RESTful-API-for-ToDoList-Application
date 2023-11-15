const express = require('express')
const app = express()
const route = express.Router()
const bcrypt = require('bcrypt');
const dataUsers = require('../models/Users')
var jwt = require('jsonwebtoken');

route.post('/regis',async(req,res)=>{

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
            message: 'penambahan user berhasil'
        });
    } catch (error) {
        console.error('Error saat menambahkan user:', error);
        res.status(500).json({
            message: 'Terjadi kesalahan saat menambahkan user'
        });
    }
    
})

route.post('/login',async(req,res)=>{
    const inputData = req.body

    const searchMail = await dataUsers.findOne({
        where: {
            email: inputData.email
        }
    });

    if(!searchMail){
        res.json({
            message: 'lu siapa dah?'
        })
        return
    }

    if(searchMail){
        if(bcrypt.compareSync(inputData.password, searchMail.password)){
            let token = jwt.sign({email:searchMail.email}, 'secret');
            res.json({
                message: 'berhasil login lur',
                token
            })
            return
        } else {
            res.json({
                message: 'gabisa njir :('
            })
            return
        }
    }
})

route.get('/',(req,res)=>{
    res.json({
        data: dataUsers
    })
})




module.exports = route