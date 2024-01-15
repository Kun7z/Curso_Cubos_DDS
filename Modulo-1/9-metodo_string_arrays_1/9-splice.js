/*
splice()

Altera o conteúdo de uma lista, removendo zero ou mais itens de um array num determinado índice.
Opcionalmente, pode-se inserir um ou mais itens no local onde outros foram deletados.

Importante!!!!: Nunca é criado uma lista de cópia, caso você substituir algo da lista, ele sempre vai ser alterado tanto no array original quanto no array copiado, similar ao reverse().

Exemplo:
*/

const lista = ['a', 'b', 'c', 'd', 'e', 'f']
lista.splice(1, 2, 'f')  //le-se removido a partir do índice 1, dois items, e substituido por esses items, o elemento 'f'
console.log(lista);  //retorna [ 'a', 'f', 'd', 'e', 'f' ]

const lista2 = ['a', 'b', 'c', 'd', 'e', 'f']
lista2.splice(1, 2, 'f', 'g', 'h')  //pode ser adicionado mais itens do que foram removidos, nesse exemplo foi removido 2 itens, mas adicionado três:  f,g,h
console.log(lista2);  //retorna ['a', 'f', 'g','h', 'd', 'e','f']

const lista3 = ['a', 'b', 'c', 'd', 'e', 'f']
lista3.splice(1, 0, 'f')  //lê-se a partir do índice 1, vou remover 0 itens, mas irei adicionar o 'f', ou seja, no índice 1 é adicionado o item 'f', e o item 'b', vai para o índice 2.
console.log(lista3);  //retorna ['a', 'f', 'b','c', 'd', 'e','f']

//push - adiciona um item ao fim do array

const lista4 = ['a', 'b', 'c', 'd', 'e', 'f']
lista4.splice(lista4.length, 0, 'g')  //aqui adicionarei ao final do array o item 'g'.
console.log(lista4)  //retorna ['a', 'b', 'c', 'd', 'e', 'f','g']

//array.pop - remove o último item do array

const lista5 = ['a', 'b', 'c', 'd', 'e', 'f']
lista5.splice(lista5.length - 1, 1)
console.log(lista5)  //retorna ['a', 'b', 'c', 'd', 'e']

//array.shit() - remove o primeiro item

const lista6 = ['a', 'b', 'c', 'd', 'e', 'f']
lista6.splice(0, 1)
console.log(lista6)

//array.unshift()  - adicionar um item no primeiro índice do array.

const lista7 = ['a', 'b', 'c', 'd', 'e', 'f']
lista7.splice(0, 0, 'f')
console.log(lista7) //retorna ['f', 'a', 'b','c', 'd', 'e','f']