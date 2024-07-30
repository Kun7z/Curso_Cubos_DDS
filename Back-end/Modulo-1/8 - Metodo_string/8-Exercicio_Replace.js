/*
Em alguns outros países é comum que se utilize .
ao invés de vírgula para separação das casas
decimais.

Faça um programa que altere uma string desse
formato para o formato que estamos
acostumados no Brasil, com vírgula.

Por exemplo, o número 97.50 deve ser
transformado para 97,50.

*/

const numero = '97.50';

console.log(numero.replace('.', ','));

// Caso a variável numero ao invés de receber o valor em string, seja em type number, podemos transformar ela em String.

const numero2 = 97.50;  //type number

const numero_em_string = String(numero2);  //transforma a variavel numero 2 em string e armazenda dentro dessa variável numero_em_string;

console.log(numero_em_string.replace('.', ','))