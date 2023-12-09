/*
Faça um programa que imprime uma mensagem amigável ( que incluir chamar o cliente pelo nome) que informa o valor que ele deve pagar.
*/

const produtos_consumidos = [{
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

const cartao = {
    nome: 'Eric',
    idade: 23,
    produtos_consumidos   //shorthand
}

let contador = 0;
let soma = 0;
for (const p of cartao.produtos_consumidos) {
    let multiplicacao_produtos = cartao.produtos_consumidos[contador].precoUnit * cartao.produtos_consumidos[contador].quantidade;
    soma += multiplicacao_produtos;
    contador += 1;
}


console.log(`${cartao.nome}, o valor da sua compra foi de: R$ ${(soma / 100).toFixed(2)} reais.`)