// Cria um novo array com todos os elementos correspondentes a condição implementada na função callback, passada como argumento.

numeros = [1, 2, 3, 4, 5]

const resultado = numeros.filter((numero) => {
    return numero > 2;
})

console.log(resultado)