const pessoa = {
    nome: 'José',
    idade: 30,
    profissao: 'professor'
}

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} e sou ${pessoa.profissao}`)

const pessoa2 = {
    nome: 'Pedro',
    idade: 65,
    profissao: 'médico'
}

console.log(`Meu nome é ${pessoa2.nome}, tenho ${pessoa2.idade} e sou ${pessoa2.profissao}`)

const pessoa3 = {
    nome: 'Ana',
    idade: 19,
    profissao: 'estudante'
}

console.log(`Meu nome é ${pessoa3.nome}, tenho ${pessoa3.idade} e sou ${pessoa3.profissao}`)


//MUITO TRABALHOSO, como tenho blocos de código repetido, e console.log repetido, posso designar tudo isso dentro de uma função.