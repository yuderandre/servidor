require('dotenv').config()

const express = require("express")
const {getImage} = require ("./functions")
const app = express()
 
app.get('/', function (req, res) {
  res.send('bienvenido')
})
app.get('/image/list',  async function (req, res) {
   let url = `https://pixabay.com/api/?key=12664246-2d4d93d2fe8f4ce834876a53d&q=yellow+flowers&image_type=photo&per_page=10`
  const images = await getImage (url)
  if (!images.error){
      console.log (images)
  }
  
   
   res.send(images)
  })
app.listen(process.env.PORT, ()=>{
    console.log ("estoy escuchando en puerto "+process.env.PORT)
})

