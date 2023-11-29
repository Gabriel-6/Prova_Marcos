const valida = (dados) => {
    if(!dados.descricao || dados.descricao.lenght > 0) {
        throw new Error("Informe a descrição")
    }
    if(!dados.volume) {
        throw new Error("Volume informado de forma errada")
    }
}

module.exports =  valida