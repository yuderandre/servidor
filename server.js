require('dotenv').config()

const express = require("express")
const { getImage } = require("./functions")
const app = express()

app.get('/', function (req, res) {
    res.send('bienvenido')
})
app.get('/image/list', async function (req, res) {
    
    let { textSearch, limitImages } = req.query
    
    let urlSearch = `https://pixabay.com/api/?key=12664246-2d4d93d2fe8f4ce834876a53d&q=${textSearch}&image_type=photo&per_page=${limitImages}`
    const resultImages = await getImage(urlSearch)
    let responseImages = {
        urlSearch,
        images: []
    }
    let status = 200
    if (!resultImages.error) {
        responseImages.images = resultImages.hits
        console.log(responseImages)
    } else {
        status = resultImages.error
        responseImages = resultImages
    }


    res.status(status).json(responseImages)
})
app.listen(process.env.PORT, () => {
    console.log("estoy escuchando en puerto " + process.env.PORT)
})

