/*
Verificando limite de caracters
Dado um determinado array de palavras, faça um programa que verifica se existe ao menos uma palavra com mais de 5 caracteres. Caso exista, o programa deverá imprimir existe palavra inválida, senão, o programa deverá imprimir array validado.

Entrada
A entrada do seu programa será composta por um array do tipo string

palavras: Array do tipo string
Saida
A saida do seu programa será composta por uma string

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]
Para o exemplo acima, o programa deverá imprimir:

existe palavra inválida
*/

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

function solucao(palavras, valor) {
    const caracterePalavras = palavras.some((palavra) => {
        return palavra.length >= valor
    })

    console.log(caracterePalavras)

    if (caracterePalavras) {
        return 'existe palavra inválida'
    } else {
        return 'array validado'
    }
}

console.log(solucao(palavras, 5))
