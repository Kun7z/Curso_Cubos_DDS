//Quantos números entre 1 e 1000 são múltiplos de 17?


let resposta= 0;

let numero=1;

while (numero<=1000){
    if (numero%17===0){
        resposta+=1;
    }
    numero+=1;
}

console.log("A resposta é",resposta)