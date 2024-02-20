const pessoa = {
    nome: 'José',
    idade: 30,
    altura: 1.73,
    tem_CNH: true,
    apelidos: ['Jr', 'Juninho', 'J.']

}

let textoCNH = pessoa.tem_CNH ? 'possui' : 'não possui';  // Ternario


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos:`)

for (apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}