// Faça um programa que calcule e imprime na tela a soma dos itens de um array 



// MINHA RESOLUÇÃO

const numeros = [0, 5, 3, 69, 45, 18, 13, 2];

let indice = 0;
let soma_anterior = 0;
let soma = 0;

// console.log(numeros.length)

while (indice < numeros.length) {
    soma_anterior = soma;
    soma = numeros[indice] + soma_anterior
    indice += 1;
    //console.log(indice)

}

console.log(`A soma dos valores da lista é de:  ${soma}`)

// RESOLUÇÃO PROFESSOR

let soma2 = 0;

const numeros2 = [0, 5, 3, 69, 45, 18, 13, 2];

for (let i = 0; i < numeros.length; i++) {  // lê-se "Enquanto i for menor que o tamanhop do array, eu quero que seja adicionado 1 no valor de I, para que seja executado o for" 
    soma2 = soma2 + numeros[i];
    //soma+=numeros[i]
}
console.log(soma2);