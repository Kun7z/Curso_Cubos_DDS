// spread ...

const pessoa = {
    nome: 'José',
    idade: 20,
    cidade: 'Salvador',
    profissao: 'Dev'
}

const endereco = {
    rua: 'Aqui',
    numero: '32',
    bairro: 'Bairro Legal',
}

const ObjetoFundido = {
    nome: pessoa.nome,
    idade: pessoa.idade,            // TRABALHOSO, JEITO ERRADO
    rua: endereco.rua
}


//UTILIZANDO SPREAD OPERATOR


const objetoFundido1 = {
    ...pessoa,
    ...endereco
}

console.log(objetoFundido1);  //JUNTA OS 2 OBJETOS EM 1 ÚNICO


const objetoFundido2 = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 2  //possível adicionar uma nova propriedade nesse objeto fundido
}

console.log(objetoFundido2) 