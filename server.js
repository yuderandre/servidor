require('dotenv').config()
const express2 = require("express")
const app = express2()
 
app.get('/', function (req, res) {
  res.send('bienvenido')
})
app.listen(process.env.PORT, ()=>{
    console.log ("estoy escuchando en puerto"+process.env.PORT)
})
