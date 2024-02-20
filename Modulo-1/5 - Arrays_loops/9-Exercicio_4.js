/*

Faça um programa que conte quantas letras A existem numa determinada palavra. Imprima o resultado na tela

*/

const palavra = 'Alemanha';
let contador = 0;

for (letra of palavra) {
    if (letra === 'A' || letra === 'a')
        contador += 1
}

console.log(`A palavra ${palavra}, possui ${contador} Ás.`); 