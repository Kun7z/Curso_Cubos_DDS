//Any

let testeNome;  //type Any
console.log(typeof testeNome)  //recebe valor undefined type any

testeNome = 'Eric';
testeNome = 3;

//Por conta de ser um type any, o tipo de dado a ser subescrito pode burlar a parte de não poder ser atribuído um dado diferente do que o original, mas deve ser usado com muito cuidado pois pode causar falhas no código

console.log(typeof testeNome)

//O ideal, seria tipar isso na origem da variável, exemplo:

let testeNome2: string;
testeNome2 = 'Eric';
//testeNome2=12;  //comentado para parar de taxar erro.