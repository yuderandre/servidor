require('dotenv').config()
const express = require("express")
const app = express()
 
app.get('/', function (req, res) {
  res.send('bienvenido')
})
app.listen(process.env.PORT, ()=>{
    console.log ("estoy escuchando en puerto"+process.env.PORT)
})
