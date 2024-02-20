//setInterval é igual o setTimeout, porém ao invés de chamar uma única vez após um determinado tempo, ele vai ficar repetindo o que ele faz após um período em um loop.

setInterval(() => {
    console.log('Olá alunos e alunas!')
}, 2000)

// Para finalizar esse script acima, tem de ser dado ctrl + C

const imprimir = () => {
    console.log('teste')
    clearInterval(interval)   //com esse clearInterval, ele para de executar.
}

const interval = setInterval(imprimir, 2000)

// decrementador, quando chegar a 0 para de executar.

let numero = 10;

const contador = setInterval(function () {  //criado função setInterval dentro da variável contador
    console.log(numero);    //todo loop vai imprimir o contador
    numero--;               //cada vez que imprimir o número, decrementa -1 do contador.
    if (numero === 0) {     //faz a verificação se o número é ===0 para parar de executar.
        console.log('Bomba explodiu')
        clearInterval(contador)  //para de 
    }
}, 1000)