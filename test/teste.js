const axios = require('axios')

const exec = async () => {
    const lata = {
        descricao: "Lata muito grande",
        volume: 150
    }
    
    const response = await axios.post('http://localhost:3001/latas')
    
    console.log(response)
}

exec()