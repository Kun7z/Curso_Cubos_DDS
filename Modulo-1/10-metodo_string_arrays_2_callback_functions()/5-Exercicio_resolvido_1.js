/*
Exercício Resolvido 1

Crie uma função que receba um array de objetos de usuários que contém as propriedades nome e idade. A função
deve validar se todos os usuários são maiores de idade. Caso todos os usuários sejam maiores, deverá exibir a
mensagem "Festa liberada!", caso contrário, deverá exibir a mensagem "Possui menor de idade".
*/

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 19 }
]

const fiscalizar = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    })
    if (resultado) {
        console.log('Festa liberada!')
    } else {
        console.log('Possui menor de idade')
    }
}

fiscalizar(usuarios)
