/*

Sem as chaves funciona normalmente o código, mas a execução do IF e do ELSE só vai poder ser executada caso possua uma única linha,
caso possua mais de uma linha, será necessário da utilização das chaves {}

*/


const idade = 9;

if (idade >= 18)
    console.log("É maior de idade");
else
    console.log("É menor de idade.");
console.log("Então pode beber")  //linha de código independente do else, vai ser executada independete do if ou else ser o verdadeiro.

console.log("Fim de código.")