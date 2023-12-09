/*
- Imprima o nome do cliente
- Imprima a idade do cliente
- Modifique a idade do cliente
- Imprima a nova idade do cliente
- Imprima o nome do primeiro produto consumido
- Imprima o preço unitário do último produto consumido por ele

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

console.log(cartao.nome)  //nome
console.log(cartao.idade) //idade
cartao.idade = 24  //atribui nova idade
console.log(`Nova idade: ${cartao.idade}`)  //imprime nova idade



console.log(cartao.produtos_consumidos[0].nome)  // acessa objeto cartao, acessando a propriedade produtos_consumidos, e como é um array, quero de indice 0, imprimindo somente a propriedade .nome
console.log(cartao.produtos_consumidos[2].nome)
console.log(cartao.produtos_consumidos[2].precoUnit)