//Classe

class Carro {
    cor: string = 'preto';  //Estamos determinando tipo
    marca: string = 'Volkswagen';  //Tipo explicito, sendo determinado
    modelo = 'Fusca';  //Dessa forma, não passando explicitamente um tipo, o typescript consegue inferir um tipo por conta do dado do atributo, ou seja sendo uma string, o tipo é uma string
    ano = 1970;
    potencia = 90;

}

const carro = new Carro()  //instanciando uma classe e a chamando, "new" informando que quero criar um novo objeto Carro a partir do antigo já criado, alterando os dados dos atributos


console.log(typeof carro)  //informa qual o tipo da variável, no caso dizendo que o new Carro() é um objeto

console.log(carro)
//Retorna abaixo em formato de objeto.

// Carro {
//     cor: 'preto',
//     marca: 'Volkswagen',
//     modelo: 'Fusca',
//     ano: 1970,
//     potencia: 90
//   }

//Para acessarmos um atributo de uma classe utilizamos o . Exemplo:

console.log(carro.ano);

// Também é possível alterar o valor do atributo. Exemplo:

carro.ano = 1980;
console.log(carro.ano)