const valida = require("../validacao/valida");

const latas = [];
let last_id = 0;

const repositorio = {
  get: () => {
    return latas;
  },
  getId: (id) => {
    return latas.filter((lata) => lata.id == id);
  },
  create: (lata) => {
    valida(lata);
    lata.id = ++last_id;
    latas.push(lata);
    console.log(lata);

    return lata;
  },
  update: (dados, id) => {
    valida(dados);

    latas.forEach(lata => {
        if(lata.id == id) {
            lata.descricao = dados.descricao
            lata.volume = dados.volume
            return lata
        }else{
            return undefined
        }
    })
  },
  destroy: (id) => {
    const indice = latas.findIndex((lata) => lata.id == id);

    latas.splice(indice, 1);
    return true
  },
};

module.exports = repositorio;
