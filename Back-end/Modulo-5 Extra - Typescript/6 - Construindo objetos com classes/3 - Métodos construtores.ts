class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const eric = new Pessoa('Eric', 24)  //instancia objeto e altera os dados do modelo class
const giullie = new Pessoa('Giullie', 21)  //instancia objeto e altera os dados do modelo class
const debora = new Pessoa('Debora', 44)  //instancia objeto e altera os dados do modelo class

console.log(eric, giullie, debora)

//Outra forma que eu poderia criar essa classe Pessoa e atribuir os atributos a ela seria:

class Pessoa2 {
    constructor(nome: string, idade: number) { } //dessa forma o typescript entende implicitamente que essa classe já possui 2 atributos, e como já informamos o tipo, quando eu instanciar esse objeto, consigo atribuir dados a um objeto que recebe os atributos dessa classe.
}

// Exemplo:

const pessoa2 = new Pessoa2('Eric', 24);
console.log(pessoa2)
//pessoa2.nome = 'eric matheus'  //erro -> deixei comentado para conseguir parar de taxar erro. No caso da erro porque preciso definir o tipo de encapsulamento, se é publico ou privado. Por padrão, o acesso é privado.

class Pessoa2Publica {
    constructor(public nome: string, public idade: number) { }
}

const pessoaPublica = new Pessoa2Publica('eric', 24);
console.log(pessoaPublica)
pessoaPublica.idade = 25  //agora por estar public consigo alterar o valor do dado inserido no atributo dessa classe.
console.log(pessoaPublica)