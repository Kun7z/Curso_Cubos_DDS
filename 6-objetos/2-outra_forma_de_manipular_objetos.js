const pessoa = {  //objeto, variavel pessoa
    nome: 'José',
    altura: 1.73,
    peso: 60
};

pessoa['nome'] = 'Pedro';  //ao invés de utilizar pessoa.nome, botado colchetes pessoa[nome], não muda nada, só outra forma de escrever.
pessoa['altura'] = 1.80;
pessoa['peso'] = 70
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} de altura e peso ${pessoa.peso} kgs`)