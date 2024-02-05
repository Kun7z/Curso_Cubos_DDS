/*
Validando lista de compras
A mãe do João deu uma lista de compras para ele ir até o mercado e comprar os itens da lista. Chegando no mercado, João leu um aviso que informava a proibição da venda de 
dois tipos de bebidas alcoolicas naquele horário: cerveja e vodka. Sendo assim, João precisa verificar se em sua lista possui alguma das duas bebidas.

Entrada
A entrada do seu programa será composta por um array do tipo string

palavras: Array do tipo string

Saida

A saida do seu programa será composta por uma string única

Faça um programa que use a função some() para validar essa lista de compras e caso encontre alguma das duas bebidas imprima revise sua lista, joão. possui bebida com venda 
proibida!, caso contrário, imprima tudo certo, vamos as compras!.

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]
Para o exemplo acima, o programa deverá imprimir:

revise sua lista, joão. possui bebida com venda proibida!

*/

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

function solucao(palavras) {
    const testaProduto = palavras.some((produto) => {
        return produto === 'cerveja' || produto === 'vodka'
    })
    if (testaProduto) {
        return 'revise sua lista, joão. possui bebida com venda proibida!'
    } else {
        return 'tudo certo, vamos as compras!'
    }
}

console.log(solucao(palavras))