/*

Exercício Resolvido 3

Crie uma função que receba o nome da marca de um carro e um array de objetos contendo as propriedades nome,
marca, ano e cor. A função deve encontrar os dados do carro, a partir do nome da marca, no array passado como
argumento e deve exibir todos os dados como retorno.

*/

const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'forda', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' },
]

const verificaMarca = (marca, arrayObjetos) => {
    return arrayObjetos.find((carro) => {
        return carro.marca == marca;
    })
}

console.log(verificaMarca('fiat', carros))