const array: number[] = [0, 122, 4, 6, 7, 8, 44]

const saoPares = (array: number[]) => {
    for (const numero of array) {
        if (numero % 2 !== 0) {
            return `Array válido`
        }
        return `Array inválido`
    }
}

console.log(saoPares(array));

// -------Resolução do professor--------

const validarNumerosPares = (numeros: number[]): string => {
    const resultado: boolean = numeros.every((numero) => {
        return numero % 2 === 0;
    });

    if (resultado) {
        return `Array válido`
    }
    return `Array inválido`
}
console.log(validarNumerosPares(array))