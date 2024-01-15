/*
Filtro de nome por letra
Faça um programa que filtre um array de strings e retorne um novo array apenas com os elementos que começam com a letra "a", maiúscula ou minúscula. Caso não exista, retorne
NAO EXISTE.
*/

const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

const verifica_letra = (nomes) => {

    const resultado = nomes.filter((item) => {
        return item.toLowerCase().charAt(0) === ('a');
    })

    console.log(resultado)
    if (resultado.length === 0) {
        return 'NAO EXISTE'
    } else {
        return resultado;
    }
}

console.log(verifica_letra(nomes));


//EU FIZ A MESMA COISA QUE O PROFESSOR.

