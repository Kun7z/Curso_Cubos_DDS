// testa se todos os elementos do array passam pelo teste implementado na função callback, passando como true ou false.

//Exemplo:

const frutas = ['abacaxi', 'manga', 'melancia'];
const numeros = [1, 2, 3, 4];


const resultado = frutas.every((elementoAtual) => {  // const resultado = frutas.every  // resultado é uma variável, não uma função, e frutas.every é um método, única coisa é que o método every, ele funciona a partir de uma funçõa
    return elementoAtual != 'banana'
})

//return true

const resultado2 = numeros.every((numero) => {
    return numero < 5;
})
console.log(resultado)
console.log(resultado2)