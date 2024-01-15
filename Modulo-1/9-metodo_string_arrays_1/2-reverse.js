/*
inverte a ordem dos arrays, mas esse método muda o array e volta a referência ao mesmo array. Fazendo com que caso ocorra duas variáveis, as mesmas sejam a mesma coisa.

Segue exemplo:

*/

const lista = ['Eu', 'Tu', 'Eles'];
const resultado = lista.reverse();
console.log(resultado)//['Eles','Tu','Eu']
console.log(lista)//['Eles','Tu','Eu']
resultado.pop();
console.log(lista);