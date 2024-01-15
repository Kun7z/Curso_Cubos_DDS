/*
Crie uma função que receba dois parâmetros, o primeiro sendo um array de nomes e o segundo um número inteiro. A função deverá dividir o array em grupos com a quantidade de
nomes de acordo com o numero passado no segundo parâmetro. Caso não seja possível separar em grupos iguais, o último grupo será o restante dos nomes. A função deve imprimir
o resultado da divisão dos grupos.

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Mandis', 'Maroquinho'];
const index = 4;

Entrada
A entrada do seu programa será composta por um array do tipo string e um index do tipo number com o tamanho do grupo:

nomes: Array do tipo string
index: Number

Saida
A saida do seu programa será composta uma string única dividida pelo simbolo da barra de divisão na mesma linha (não sendo necessario dar enter ou /n):

Para o exemplo acima deverá imprimir:

Grupo 1: Juninho, Vidal, Guido, Dani / Grupo 2: Mandis, Maroquinho.
*/

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Mandis', 'Maroquinho'];
const index = 4;

//minha resolução

function solucao(nomes, index) {
    primeiro_grupo = nomes.slice(0, 4)
    segundo_grupo = nomes.slice(4)
    return `Grupo 1: ${primeiro_grupo.join(', ')} / Grupo 2: ${segundo_grupo.join(', ')}`
}

teste = solucao(nomes, index)
console.log(teste)

//resolução do professor

const nomes2 = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Mandis', 'Maroquinho'];
const index2 = 4;

const separarGrupos = (lista, tamanho) => {
    const resultado = [];
    let numeroGrupo = 1;

    for (let i = 0; i < lista.length; i += tamanho) {
        const grupo = console.log(`Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`)
        console.log(grupo)
        numeroGrupo++
    }
}

separarGrupos(nomes2, index2)