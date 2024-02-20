const endereco="Avenida 1";

let preco_leite=9.5;  //variavel 
let preco_queijo=30;  //variavel 
let preco_pizza;  //variavel sem valor

preco_pizza=45  //dei o valor a variável posteriormente

console.log("Preço do leite: ", preco_leite);   //Retorna valor 30, porque a alteração do valor de variável será lido posteriormente.
console.log("Preço do Queijo: ", preco_queijo);
console.log("Preço da Pizza: ", preco_pizza);  //undefined

preco_leite=8;  //alterado valor da variável preco_leite, sendo possível por não ser uma constante.

console.log("Preço do leite: ", preco_leite);   //Retorna valor 8 devido a ler depois da alteração