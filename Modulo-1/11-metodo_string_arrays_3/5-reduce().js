/*
Executa uma função callback, passada como argumento, para cada elemento do array, que resulta em apenas um
valor de retorno.
A função passada como argumento para o método reduce recebe 4 argumentos.

1. acumulador - valor inicial (ou o valor do callback anterior)
2. valorAtual - o valor do elemento atual
3. index - o índice atual
4. array - o array completo

sintaxe

array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])
*/

const array = [0, 1, 2, 3, 4];

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});

console.log(valorReduce);