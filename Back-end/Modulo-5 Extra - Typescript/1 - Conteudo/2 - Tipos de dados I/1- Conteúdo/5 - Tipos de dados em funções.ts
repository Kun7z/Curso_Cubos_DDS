//devemos declarar o parâmetro, assim como o retorno, se tiver retorno
const imprimir = (nome: string): string => {
    return `Olá`
}

//podemos ter parâmetros com valores de tipos diferentes do que o retorno, exemplo, parâmetro recebe um number mas retorna um boolean
const imprimirMaiorIdade = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }
    return true;
}

//parâmetros que recebem um objeto

const imprimirUsuario = (usuario: { nome: string, idade: number }): string => {
    return `Nome do usuário:${usuario.nome}`
}

//parâmetro que recebe um array

const imprimirArray = (array: string[]): string => {
    return array[0];
}

