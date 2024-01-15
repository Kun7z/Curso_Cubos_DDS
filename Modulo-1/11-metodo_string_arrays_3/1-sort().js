/*
sort()

Ordena os elementos do próprio array. Por padrão, a ordenação é de acordo com a tabela unicode.
Opcionalmente, recebe uma função callback que possui dois parâmetros, sendo eles, o primeiro e o 
segundo elemento a ser comparado.

obs: Na tabela unicode a ordem é números, letras maiúsculas, minúsculas, caso dúvidas conferir tabela unicode.

sintaxe

arr.sort([funcaoDeComparacao])

Exemplo:
*/


const array = [2, 4, 1, 20, 3, 43, 82];

array.sort();  //[1, 2, 20, 3, 4, 43, 82 ]

console.log(array)

const metodo_correto = array.sort((a, b) => {
    return a - b;   //faz a verificação de a - b, pega um valor, e compara com o próximo, e assim ordena, nesse caso em ordem de menor para maior.
})

console.log(metodo_correto)