/*
Preenche uma string colocando um texto específico no início dela(várias vezes se necessário), até que a string atinja o tamanho length desejado.

Sintaxe:

padStart(length, text)

Exemplo:
*/

const ultimos4dig = '2345';

const numCartao = ultimos4dig.padStart(19, '**** ')

console.log(numCartao);