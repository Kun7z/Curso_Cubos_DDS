/*
slice()

Faz uma cópia de parte de um array, retornando essa cópia.
O array original não é modificado.

*/

const lista = ['Eu', 'Tu', 'Eles', 'Nós'];
const resultado = lista.slice(1, 3);  //passado range do index para que se é criado o slice, índice final não é incluído
console.log(resultado)