/*

Filtro de caracteres
Faça um programa que percorra um array com nomes de cidades e retorne somente com nomes que contenham até 8 caracteres.

Entrada
A entrada do seu programa será composta por um array do tipo string

cidades: Array do tipo string

Saida
A saida do seu programa será composta por uma string única dividida pelo virgula -

const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
Para o exemplo acima, o resultado deve ser:

Salvador, Brasilia, Recife

*/

const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

function solucao(cidades, index) {
    const cidadesMaiorQue8Caracteres = cidades.filter((cidade) => {
        return cidade.length <= index;
    })

    return cidadesMaiorQue8Caracteres.join(', ')
}

console.log(solucao(cidades))