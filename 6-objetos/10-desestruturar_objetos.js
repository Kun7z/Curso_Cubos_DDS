const pessoa = {
    nome: 'José',
    idade: 20,
    cidade: 'Salvador',
    profissao: 'Dev'
}

// const nome = pessoa.nome;
// const idade = pessoa.idade;

// console.log(nome, idade)  //funciona

//forma melhor - desustruturação

//const { nome, idade } = pessoa;  //desestruturação, propriedade do lado esquerdo, do lado direito variável https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//console.log(nome, idade)

const { nome, idade, ...outros } = pessoa  // caso eu queira guardar todo o restante de um objeto gigante, não sendo o caso agora, mas para ser usado posteriormente

console.log(outros)