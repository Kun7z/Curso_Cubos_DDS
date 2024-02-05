/*
Faça um programa que filtra um array de números inteiros e retorne um novo array apenas com os números pares. Se não existir, retorne NAO EXISTE.

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]
Para o exemplo acima, o resultado deve ser:

'[98,-76,0,12,60,44]'
*/

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function solucao(numeros) {
    const numerosPares = numeros.filter((numero) => {
        return numero % 2 == 0;
    })

    if (numerosPares.length > 0) {
        return JSON.stringify(numerosPares)  // o exercicio pede para utilizar esse método para transformar o array para string
    } else {
        return 'NAO EXISTE'
    }
}

console.log(solucao(numeros))