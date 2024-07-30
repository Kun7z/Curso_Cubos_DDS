/*
Sintaxe:

str.slice(startIndex[, endIndex])  // [] é talvez, não obrigatório.

Função: Corta uma string/ Divide.

Exemplo:

*/

const string = 'Ricardo';

console.log(string.slice(-3));  //Retorna 'rdo', pois ele vai quebrar a string a partir do segundo R, pois como é um número negativo, ele conta de trás pra frente, sendo -3, -2, -1, parando no 'r'.

//outro exemplo:

console.log(string.slice(7));  // Retorna <empty string>, pois a string não tem tamanho suficiente.


//endIndex:

//1- omitindo endSlice.

console.log(string.slice(0)); //Retorna Ricardo.

//2- undefined endSlice.

let i;  //Variável criada sem atribuir valor.
console.log(string.slice(0, i))

//3- Passando número maior que o tamanho da string.

console.log(string.slice(0, 7));  // Retorna Ricardo.

//4- Exemplo para criar uma nova string

const str1 = 'A manhã está sobre nós';  //str.length 22

let str2 = str1.slice(3, 10);  //Ignora o valor de índice 10, sendo assim retornando 'anhã es'


