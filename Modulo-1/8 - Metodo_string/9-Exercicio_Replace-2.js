/*
Em alguns outros países é comum que se utilize
vírgula ao invés de ponto para separação das
casas de milhar.

Faça um programa que altere uma string desse
formato para o formato que estamos
acostumados no Brasil, com ponto.

Por exemplo, o número 1,350,000 deve ser
transformado para 1.350.000.
*/

const numero = '1,350,000';

let numero_convertido = '';

for (const i of numero) {
    numero_convertido += i.replace(',', '.');
}
console.log(numero_convertido)