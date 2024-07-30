/*
Filtro e validação de usuários

Com base no array de objetos abaixo filtre os usuários que possuam entre 18 e 65 anos, depois faça uma validação que verifica se todos possuem habilitação. Se o resultado
da validação for false imprima todos precisam estar habilitados, senão, todos passaram no teste.

Entrada
A entrada do seu programa será composta por um objeto que contem o nome que é do tipo string, idade do tipo number e habilitado do tipo boolean:

usuários : Objeto
nome: string
idade: Number
habilitado: Boolean


Saida
A saida do seu programa será composta por uma frase do tipo string

Dica: utilize o método filter() e every()

const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
]
*/

const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
]

function solucao(usuarios) {
    const usuarioRangeIdade = usuarios.filter((usuario) => {
        return usuario.idade >= 18 && usuario.idade <= 65;
    })

    const temHabilitacaoERangeIdade = usuarioRangeIdade.every((usuario) => {
        return usuario.habilitado === true;
    })

    if (temHabilitacaoERangeIdade) {
        return 'todos passaram no teste'
    } else {
        return 'todos precisam estar habilitados'
    }

}

console.log(solucao(usuarios))