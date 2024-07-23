//void, função vazia, não retorna nada para ela mesma.

//para ver que ela é void, só passar o mouse em cima da variável.

const vazia = () => {
    console.log('teste');
    return; //mesmo utilizando o return, como não estou retornando nada, ela ainda está sendo uma função void.
}

//never, função que não retorna nada, mas ela realiza uma exceção, por exemplo, abaixo realizando a entrega de um erro.
const validarNome = (nome: string) => {
    if (nome.length < 5) {
        throw new Error('O nome precisa ter 5 ou mais caracteres');
    }
}