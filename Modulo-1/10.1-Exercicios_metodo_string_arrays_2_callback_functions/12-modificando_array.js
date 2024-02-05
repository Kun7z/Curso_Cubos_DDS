/*
Faça um programa que, a partir de um array, crie um novo array com os mesmos elementos, mas que:

todos os elementos comecem com letras maiúsculas e que o restante seja minúscula;
em cada elemento seja adicionado o número do índice correspondente.
Um exemplo seria uma entrada do tipo:

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
Para o exemplo acima, o resultado deve ser:

'["0 - Manga","1 - Uva","2 - Abacaxi","3 - Banana","4 - Maçã"]'
A saída esperada é uma string. Portanto, lembre-se de retornar o resultado usando o JSON.stringfy().
*/

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

function solucao(frutas) {
    const texto = frutas.map((fruta, indice) => {
        return `${indice} - ${fruta.slice(0, 1).toUpperCase()}${fruta.slice(1).toLowerCase()}`;
    });
    return JSON.stringify(texto)  //exercicio exige que seja usado método json.stringify()
}
console.log(solucao(frutas))