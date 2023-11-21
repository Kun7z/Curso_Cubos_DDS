/*

Crie um array com 5 nomes de países ✔
Adicione um país ao fim da lista ✔
Imprima a lista na tela ✔ 

Remova um país do fim da lista ✔
Imprima a lista na tela ✔

Adicione um país o início da lista ✔
Imprima a lista na tela ✔

Remova um país do início da lista  ✔
Imprima a lista na tela ✔

Imprima o último país da lista na tela ✔
Imprima o segundo país da lista na tela ✔
Imprima o país de índice 2 na tela ✔
*/

const paises = ['brasil', 'argentina', 'colombia', 'mexico', 'peru'];  // Crie um array com 5 nomes de países

paises.push('cuba');  //Adicione um país ao fim da lista

console.log(paises);  //Imprima a lista na tela

paises.pop();  // Remova um país do fim da lista 

console.log(paises);  // Imprima a lista na tela 

paises.unshift('estados unidos');  //adicione um país o início da lista

console.log(paises);  // Imprima a lista na tela

paises.shift();  //Remova um país do início da lista 

console.log(paises)  // Imprima a lista na tela

console.log(paises[paises.length - 1])// Imprima o último país da lista na tela

console.log(paises[1]);  //Imprima o segundo país da lista na tela

console.log(paises[2]);//Imprima o país de índice 2 na tela
