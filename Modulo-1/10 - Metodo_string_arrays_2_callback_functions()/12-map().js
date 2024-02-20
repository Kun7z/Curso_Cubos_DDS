/*
Executa uma função callback passada como argumento para cada elemento do array e retorna um novo array como resultado

Exemplo:
*/

const numeros = [1, 2, 4];

const dobro = numeros.map((elementoAtual) => {
    return elementoAtual * 2;
})

console.log(dobro) //output [ 2, 4, 8 ]