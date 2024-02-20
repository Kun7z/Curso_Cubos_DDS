let precodoproduto1=19.29;
let precodoproduto2=0.80;
let precodoproduto3=4.85;

let custo=0;

if (precodoproduto1<=18 ) {
    console.log("Comprei o produto 1");
    custo+=precodoproduto1;
}

if (precodoproduto2 < 3 ) {
    if (precodoproduto2 >= 1.5 ) { 
        console.log("Comprei o produto 2");
        custo+=precodoproduto2;
} else {
    console.log("Tem algo errado com o produto 2");
}}


console.log("Comprei o produto 3");
custo+=precodoproduto3;

console.log("Eu paguei",custo,"reais")