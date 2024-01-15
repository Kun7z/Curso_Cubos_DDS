const pessoa = {  //objeto, variavel pessoa
    nome: 'José',
    altura: 1.73,
    peso: 60
};

pessoa.nome = 'Pedro';  //alterado variavel

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} de altura e peso ${pessoa.peso} kgs`)