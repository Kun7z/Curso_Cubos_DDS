let conta=0;
const deposito=500;
let mes=0;

// todo mês essa conta rende CDI, algo entre 10% a.a
// todo mês irei depositar nessa conta 

// Quantos meses demora para eu chegar em 100000 reais?

while(conta<100000){
    conta+=deposito;
    conta+=conta*0.13/12;
    mes+=1;
}

console.log(mes/12);