const pessoa = {
    nome: 'José',
    idade: 30,
    altura: 1.73,
    tem_CNH: true,
    apelidos: ['Jr', 'Juninho', 'J.'],
    carro: {
        marca: "Toyota",
        modelo: "Etios",        //objeto dentro de objeto
        ano: 2020,
        potencia: 80
    }
}

console.log(pessoa.carro);  //imprime todas as informações dentro pessoa.carro, porque pessoa.carro agora é um objeto com vários itens

console.log(pessoa.carro.marca);  //Imprime somente o item do objeto carro, que é um item dentro do objeto pessoa

//PODERIA SER FEITO DE OUTRA FORMA

const pessoa1 = {
    nome: 'José',
    idade: 30,
    altura: 1.73,
    tem_CNH: true,
    apelidos: ['Jr', 'Juninho', 'J.'],
    carro: carro1       //indica variável do carro1
}

const carro1 = {
    marca: "Toyota",
    modelo: "Etios",        //objeto dentro de objeto
    ano: 2020,
    potencia: 80
}

//posso atribuir uma variável também.

const minha_altura = 1.70;

const pessoa2 = {
    nome: 'José',
    idade: 30,
    altura: minha_altura
}

// SHORTHAND

const pessoa3 = {
    nome: 'José',
    idade: 30,
    altura: minha_altura,
    carro1                      //Quando não possui os : (dois pontos), fica-se subentendido que há uma variável carro em algum lugar do código, onde ele vai buscar essa informação, ao invés de ter de escrever carro1:carro1
}
