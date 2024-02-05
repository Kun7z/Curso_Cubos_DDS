const arrayNumeros = [1, 2, 4, 4, 6, 7, 1]

const arrayLetras = ['a', 'b', 'b', 'c', 'd', 'e']

module.exports = arrayNumeros;  //exporta o array para fora, poderia ser uma variavel também, qualquer coisa do meu código.

module.exports = {
    arrayNumeros: arrayNumeros,     //estou exportando as duas variáveis, arrayNumeros e arrayLetras, colocando dentro de um objeto através das {}.
    arrayLetras: arrayLetras
}

//posso exportar de outra forma também

const objeto = {
    arrayNumeros: arrayNumeros,
    arrayLetras: arrayLetras
}

module.exports = objeto;  //exporta o obj objeto