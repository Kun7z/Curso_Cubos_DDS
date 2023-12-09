/*
Crie um objeto que represente o cartão
de consumo de um cliente. Deve ter:
o Nome do cliente
o Idade do cliente
o Produtos consumidos
o Cada produto pode ter:
o Nome do produto
o Preço unitário (em centavos)
o Quantidade comprada
Pode inventar os dados. Coloque pelo
menos 3 produtos.

*/

// MINHA RESOLUÇÃO.

const produtos_consumidos = {
    nome_produto: 'café',
    preco_unitario: 2579,
    quantidade: 1
}
const cartao = {
    nome: 'Eric',                       // Como não pedia um texto, imaginei que não precisaria literalmente criar 3 produtos, mas minha ideia era adequar a um texto final os produtos fazendo uma estrutura de for, não está errado, só está diferente
    idade: 23,
    produtos_consumidos
}
console.log(cartao.produtos_consumidos)

// RESOLUÇÃO PROFESSOR

const cartao1 = {
    nome: 'Eric',
    idade: 23,
    produtos_consumidos: [{
        nome: 'Pão de Alho',
        precoUnit: 1500,
        quantidade: 3
    }, {
        nome: 'Cerveja',
        precoUnit: 1000,
        quantidade: 2
    }, {
        nome: 'Água',
        precoUnit: 500,
        quantidade: 1
    }]
}



// OUTRA FORMA DE RESOLUÇÃO DO PROFESSOR, MAIS SIMILAR A MINHA

const produtos_consumidos1 = [{
    nome: 'Pão de Alho',
    precoUnit: 1500,
    quantidade: 3
}, {
    nome: 'Cerveja',
    precoUnit: 1000,
    quantidade: 2
}, {
    nome: 'Água',
    precoUnit: 500,
    quantidade: 1
}]

const cartao2 = {
    nome: 'Eric',
    idade: 23,
    produtos_consumidos1    //shorthand, poderia ser produtos_consumidos:produtosconsumidos1
}

console.log(cartao2)
