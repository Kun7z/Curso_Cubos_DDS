//Retorna o primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. Caso contrário, retorna undefined.

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
]

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'joao'
})

console.log(resultado)