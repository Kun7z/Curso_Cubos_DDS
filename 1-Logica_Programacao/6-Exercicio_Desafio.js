/*
O objetivo desse exercício é retornar se o número de entrada é divisível por x ou não. Seu programa receberá sempre de entrada um 
número inteiro e outro número inteiro representando X e deverá imprimir na tela se o primeiro número de entrada é divisível por X.
*/


let x=4;
let y=2;

console.log("O número",x,"é divisível pelo número", y ,"?");


const resto = x % y === 0;

console.log(resto)