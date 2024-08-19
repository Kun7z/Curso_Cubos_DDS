//função recebendo uma string e retornando uma string

function imprimir(param: string): string {
    return param
}

//função recebendo e retornando um number
function imprimir2(param: number): number {
    return param
}

//função recebendo qualquer tipo e retornando qualquer tipo
function imprimir3(param: any): any {
    return param
}

const ex1 = imprimir('Guido')

// console.log(ex1.length);  

const ex2 = imprimir2(123)

ex2.toFixed(2)

const ex3 = imprimir3('123')

ex3.length
// console.log(ex3.length)  

//criando um Generic T, mas que não possui um tipo de dado, pode ser qualquer coisa.
function imprimir4<T>(param: T): T {  //estou criando uma função que tem o generic T, que pode receber de parâmetro qualquer coisa com o generic T e retornar qualquer coisa com o generic T.
    return param
}

const ex4 = imprimir4<string>('123')  // agora quando vou utilizar a função com o generic, acabo inferindo um tipo de dado existente, nesse caso string na hora da chamada da função.

ex4.length