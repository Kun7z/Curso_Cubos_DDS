/*
Filtro de números positivos
Faça um programa que filtre um array de números inteiros e retorne um novo array apenas com os números positivos.

Caso não exista nenhum número inteiro positivo, retorne a frase NAO EXISTE.

const numeros = [10, 987, -886, 0, 12, 199, -45, -67]
Para o exemplo acima, o resultado deve ser:

'[10,987,12,199]'
A saída esperada é uma string. Portanto, lembre-se de retornar o resultado usando o JSON.stringfy().
*/

const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

function solucao(numeros) {
    const numerosPositivos = numeros.filter((numero) => {
        return numero > 0;
    })

    if (numerosPositivos.length > 0) {
        return JSON.stringify(numerosPositivos)
    } else {
        return 'NAO EXISTE'
    }
}

console.log(solucao(numeros))