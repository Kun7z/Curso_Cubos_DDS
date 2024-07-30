const array: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const filtraPares = (arrayNumeros: number[]): number[] => {
    const resultado = arrayNumeros.filter((numero) => {
        return numero % 2 === 0;
    })
    return resultado;
}

console.log(filtraPares(array));