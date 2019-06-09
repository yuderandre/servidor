require('dotenv').config()
const conflicto = require("express")
const app = conflicto()
 
app.get('/', function (req, res) {
  res.send('bienvenido')
})
app.listen(process.env.PORT, ()=>{
    console.log ("estoy escuchando en puerto"+process.env.PORT)
})
