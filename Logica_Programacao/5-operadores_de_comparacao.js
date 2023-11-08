let numero = 5436;
let texto="Oi";
let vazio;
let verdade=numero>100; // true boolean
let inverdade=numero<10; // false boolean

console.log("Número: ",numero);
console.log("Texto: ",texto);
console.log("Vazio: ",vazio);
console.log("Verdade: ",verdade);
console.log("Inverdade: ",inverdade);

console.log("------------ Tipos ------------")
// Ao adicionar o comando typeof me é retornado qual o tipo da minha variável

console.log("Número: ",typeof numero);
console.log("Texto: ",typeof texto);
console.log("Vazio: ",typeof vazio);
console.log("Verdade: ",typeof verdade);
console.log("Inverdade: ",typeof inverdade);

console.log("----------------Comparador-----------")
console.log("É igual?",texto === "Oi");  // comparador se algo é igual a outra coisa ===
console.log("É diferente?",numero !== "Oi");  //  !== diferente