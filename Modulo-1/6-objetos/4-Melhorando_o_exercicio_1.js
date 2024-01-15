const pessoa = {
    nome: 'José',
    idade: 30,
    altura: 1.73,
    tem_CNH: true,
    apelidos: ['Jr', 'Juninho', 'J.']  // Se eu adicionar mais itens na lista, ou diminuir, não imprimirá undefined para o usuário, se tornando adaptavel.

}

let textoCNH = '';

if (pessoa.tem_CNH === true) {
    textoCNH = 'possui';
}
else {
    textoCNH = 'não possui';
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos:`)

for (apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)     //laço para adicionar a quantidade de apelidos.
}