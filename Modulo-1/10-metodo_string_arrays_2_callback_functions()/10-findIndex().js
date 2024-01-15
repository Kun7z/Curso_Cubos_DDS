// Retorna o índice do primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. Caso contrário, retorna -1.

//Exemplo:


const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'forda', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' },
]

const resultado = carros.findIndex((carro) => {
    return carro.nome === 'ranger';  //2
})

console.log(resultado)