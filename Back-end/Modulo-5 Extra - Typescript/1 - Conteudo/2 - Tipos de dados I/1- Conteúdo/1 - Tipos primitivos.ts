//Em computação existem apenas 4 tipos de dados primitivos, algumas linguagens subdividem esses tipos de dados em outros de acordo com a capacidade de memória necessária para a variável. Mas de modo geral, os tipos de dados primitivos são:

//string

let nome = 'string';

//number 

let number = 12;

let valor = 12.2;

//boolean

let verdadeiro = true;

//podemos ver qual os tipos de dados através de um método do typescript typeof, exemplo:

console.log(typeof number);  //12
console.log(typeof valor);  //12.2

//IMPORTANTE: No typescript apesar da variavel valor ser um tipo de ponto flutuante, possui um tipo number igual.
//--------
//Algo que podemos ver também, é que diferentemente do javascript, no TS, se uma variável for declarada com um tipo de dado e posteriormente tentarmos atribuir um valor com dado diferente, não será possível realizar essa operação. No exemplo abaixo podemos ver isso, em que a variável teste recebe uma string e depois recebe um number, já taxando erro na operação. 

let teste = 'Eric';
//teste = 12;  //comentei a linha para parar de dar erro ao salvar esse arquivo.
