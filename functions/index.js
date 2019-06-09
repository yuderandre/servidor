const axios = require('axios');
module.exports = {
    getImage(url) {
        return new Promise((resolve,reject)=>{
            axios.get(url)
            .then(function (response) {
                // handle success
                resolve( JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                resolve({
                    error: 500,
                    errorMessage: error.message
                })
            })
        })
       
    },
    async getImagebyURI(url) {
        await axios.get(url)
            .then(function (response) {
                // handle success
                return JSON.stringify(response.data)
            })
            .catch(function (error) {
                // handle error
                return {
                    error: 500,
                    errorMessage: error.message
                }
            })


    }
}

