// const imprimirNome = (nome) => {
//     console.log(nome);
// }

// imprimirNome('Guido')

const imprimirGuido = () => {
    console.log('Guido Cerqueira')
}

setTimeout(imprimirGuido, 2000)  //função setTimeout chamará a função imprimirGuido depois de 2 segundos, ou 2000 milisegundos

//caso queira criar a função dentro do setTimeout, posso fazer com arrow function.

setTimeout(() => {
    console.log('Guido Cerqueira 2')
}, 5000)

//caso queira fazer com function

setTimeout(function () {
    console.log('Guido Cerqueira 3')
}, 6000)