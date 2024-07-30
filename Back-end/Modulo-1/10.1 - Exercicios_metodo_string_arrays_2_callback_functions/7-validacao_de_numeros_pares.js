/*
Validação de numeros pares

Dado o array numérico abaixo, faça um programa que consiga validar se todos os números são pares. Se todos os itens do array forem par, o programa deverá imprimir array
válido, senão array inválido.

Entrada
A entrada do seu programa será composta por um array do tipo string:

numeros: Array do tipo string

Saida
A saida do seu programa será composta por uma string

Dica: utilize o método every()

const numeros = [0, 122, 4, 6, 7, 8, 44]
Para o exemplo acima, o programa deverá imprimir:

array inválido
*/

const numeros = [0, 122, 4, 6, 7, 8, 44];

function solucao(numeros) {
    const seNumerosPares = numeros.every((numero) => {
        return numero % 2 == 0;
    })
    if (seNumerosPares) {
        return 'array válido'
    } else {
        return 'array inválido'
    }
}

console.log(solucao(numeros))