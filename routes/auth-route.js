const express = require('express')
const app = express()
const route = express.Router()
const bcrypt = require('bcrypt');
const dataUsers = require('../models/users-model')
var jwt = require('jsonwebtoken');

route.post('/regis',(req,res)=>{

    const getData = req.body
    console.log(getData)

    const saltRounds = 10;
    const myPlaintextPassword = getData.password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);

    getData.password = hash
    console.log(getData)

    let newUser = {
        nama: getData.nama,
        email: getData.email,
        password: getData.password,
    }

    dataUsers.push(newUser)

    res.json({
        message: 'penambahan data berhasil'
    })
})

route.post('/login',(req,res)=>{
    const inputData = req.body

    const searchMail = dataUsers.find((item)=> item.email == inputData.email)

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