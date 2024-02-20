/*

Faça um programa que realize uma contagem regressiva  de 10 até 0.

*/

//MINHA RESOLUÇÃO

let contador = 10;

while (contador >= 0) {
    console.log(contador)
    contador -= 1
}
console.log("Acabou!")

//RESOLUÇÃO DO PROFESSOR

for (let i = 10; i >= 0; i--) {
    console.log(i)
}