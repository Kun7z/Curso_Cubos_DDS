/*
Declare uma variável que armazena um
objeto contendo dados de uma pessoa:
nome, idade, profissão e altura.

Faça uma função que tem um
parâmetro e não retorna valores. Essa
função deve imprimir na tela a
apresentação de uma pessoa, seguindo
o modelo abaixo:

"Olá! Meu nome é João, sou um jovem
de 12 anos, l.4m de altura e sou
estudante"
*/

const pessoaObjeto = {
    nome: 'Eric',
    idade: 23,
    profissao: 'dev',
    altura: 1.80
}

function apresentacao_pessoa(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}

apresentacao_pessoa(pessoaObjeto)