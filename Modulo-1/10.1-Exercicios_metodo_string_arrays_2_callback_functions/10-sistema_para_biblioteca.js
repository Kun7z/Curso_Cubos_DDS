/*
Sistema para biblioteca
Faça um sistema que possa auxiliar funcionários a localizar em que posição da estante da biblioteca está um determinado livro. Sendo assim, o sistema deve receber o nome 
do livro e informar a sua posição na estante.

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

Entrada
A entrada do seu programa será composta por um array do tipo string e uma variavel do tipo string que vai determinar se o array possui o livro:

livros: Array do tipo string
nomeDoLivro: string

Saida
A saida do seu programa será composta por uma string

Para o exemplo acima o sistema deverá imprimir:

O livro está na posição 4
Se não existir um livro o sistema deverá imprimir:

Inválido
*/

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function solucao(livros, nome) {
    const acharLivro = livros.findIndex((livro) => {
        return livro === nome
    })

    if (acharLivro === -1) {
        return 'Inválido'
    } else {
        return `O livro está na posição ${acharLivro + 1}`;  //+1 porque ele começa a contar no índice 0
    }
}

console.log(solucao(livros, nomeDoLivro))