/*
Teste suas habilidades

const texto = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

Entrada
A entrada do seu programa será composta por um array do tipo string:

texto: Array do tipo string


Saida
A saida do seu programa será composta uma string única dividida por virgula:

Dado o array acima, faça o seguinte:

a) Organize o array na ordem inversa e transforme em uma única string separada por vírgulas de forma q seja impresso:

Uva, Pêra, Abacaxi, Maçã, Banana

*/

function solucao(texto) {
    texto.reverse()
    const resultado = texto.join(', ')
    return (resultado)
}

const texto = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
teste = solucao(texto)
console.log(teste)
