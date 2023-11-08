const listanumero=[34,56,768,8,81,3,6,12,10000,750]
let resultado=0;
let numeroguardado=1000000000000000000000000000000000000;

// 1- Qual a soma deles?


for(const numero of listanumero){
    resultado=resultado+numero;
}
console.log("A soma dos números da lista é:", resultado);

// 2 - Qual o menor deles?

for(const numero2 of listanumero){
    if(numeroguardado>numero2){
        numeroguardado=numero2;
    }
}

console.log("O menor número da lista é: ",numeroguardado);