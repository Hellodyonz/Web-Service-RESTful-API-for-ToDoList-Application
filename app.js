const express = require('express')
const app = express()
const rootRoutes = require('./routes')
const db = require('./config/db')
const Todos = require('./models/Todos')
const Users = require('./models/Users')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(rootRoutes)

async function testConection(){
    try {
        await db.authenticate();
        // await Todos.sync({force: true})
        // await Users.sync({force: true})
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConection()

app.listen(PORT,()=>{
    console.log(`app running in PORT ${PORT}`)
})