/*
Remover Pontuação
Crie uma função que receba um número de CPF ou CNPJ e remova toda pontuação. A função deverá imprimir o resultado.

Entrada
A entrada do seu programa será composta por uma variável do tipo string:

index: Valor a ser analisado pelo seu programa;
Saida
A saida do seu programa será composta por uma variável do tipo number, como pode ser observado nos exemplos abaixo:

const index = "111.022.033-44";

Para o exemplo acima, deverá imprimir:

11102203344
const index = "16.068.948/0001-19";

Para o exemplo acima, deverá imprimir:

16068948000119
*/


// MINHA RESOLUÇÃO

function solucao(index) {
    index_replace = '';
    index_split = index.split(/[./-]/)   //regex que remove os pontos, / e -

    for (const i of index_split) {
        index_replace += i;
    }
    return Number(index_replace)
}

teste = solucao("16.068.948/0001-19")
console.log(teste)

//RESOLUÇÃO DO PROFESSOR

const removerPontuacao = (numero) => {
    let numeros = numero.replace('-', '').replace('/', '').split('.');
    let numeroLimpo = '';
    for (const item of numeros) {
        numeroLimpo += item;
    }
    return (numeroLimpo)

}

teste2 = removerPontuacao("111.022.033-44")
console.log(teste2)