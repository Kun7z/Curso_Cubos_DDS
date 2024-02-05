const carros = require("../bancodedados")

//parametros de rota
//localhost:3000/carros/branco
const imprimeCarro = (req, res) => {
    const { marca, cor } = req.query;//desestruturação
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca == marca;
        })
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor == cor;
        })
    }

    res.send(resultado)
}

const obterCarro = (req, res) => {
    const { id } = req.params;//desestruturação

    const carroEncontrado = carros.find((carro) => {
        return carro.id == id;
    })

    res.send(carroEncontrado)
}

module.exports = { imprimeCarro, obterCarro }