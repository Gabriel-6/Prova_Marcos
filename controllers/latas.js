const repositorio = require('../repositorios/latas.js')

const controller = {
    get: (req, res) => {
        res.send(repositorio.get())
    },
    getId: (req, res) => {
        const {id} = req.params

        const lata = repositorio.getId(id)

        if(lata.length == 0){
            res.status(204).send("Não foram encontrados dados")
        }else{
            res.send(lata)
        }
    },
    create: (req, res) => {
        try{
            const dados = req.body
            res.send(repositorio.create(dados))
        }catch(err){
            res.status(400).send(err.message)
        }
    },
    update: (req, res) => {
        try {
            const dados = req.body
            const {id} = req.params
            
            dados.id = id

            return res.send(repositorio.update(dados, id))
        }catch(err){
            res.status(400).send(err.message)
        }
    },
    destroy: (req, res) => {
        const {id} = req.params

        const lata = repositorio.destroy(id)
        res.send(lata)
    }
}

module.exports = controller