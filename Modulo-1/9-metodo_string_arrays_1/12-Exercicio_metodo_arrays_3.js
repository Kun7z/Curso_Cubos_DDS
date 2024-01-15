/*
Grupos de carros
Crie uma função que receba dois parâmetros, o primeiro sendo um array de carros e o segundo um número inteiro. A função deverá encontrar o carro na posição informada no segundo
parâmetro e capturar 3 carros subsequentes incluindo o que foi encontrado na posição informada. A função deve imprimir o resultado.

const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const index = 3;

Entrada
A entrada do seu programa será composta por um array do tipo string e um number que vai determinar a quantidade de carros:

carros: Array do tipo string
index: Number

Saida
A saida do seu programa será composta por uma string única dividida pelo sinal de subtração -

Para o exemplo acima deverá imprimir:

Corola - Fusca - Chevete
*/

const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const index = 3;

function solucao(carros, index) {
    const coleta_carros = carros.slice(index, (index + 3))
    const resultado = coleta_carros.join(' - ')
    return (resultado)
}

teste = solucao(carros, index)
console.log(teste)