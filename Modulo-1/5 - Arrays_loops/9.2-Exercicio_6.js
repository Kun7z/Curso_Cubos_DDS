/*

Faça um programa que imprima todos os números pares entre 1 e 50

*/

// MINHA RESOLUÇÃO.

for (let numero = 50; numero > 0; --numero) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
}

//RESOLUÇÃO DO PROFESSOR

let numero2 = 2
while (numero2 <= 50) {
    console.log(numero2);
    numero2 += 2;
}