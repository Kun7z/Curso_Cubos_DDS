const cidades: string[] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const filtraCidadesComMenosDe8Caracteres = (arrayCidades: string[]): string[] => {
    let cidadesComMenosDe8Caracteres: string[] = [];
    for (const cidade of cidades) {
        if (cidade.length <= 8) {
            cidadesComMenosDe8Caracteres.push(cidade)
        }
    }
    return cidadesComMenosDe8Caracteres;
}


console.log(filtraCidadesComMenosDe8Caracteres(cidades))

//------resolução do professor--------

const filtraCidades = (cidades: string[]): string[] => {
    const resultado = cidades.filter((cidade) => {
        return cidade.length <= 8;
    })
    return resultado;
}

console.log(filtraCidades(cidades));