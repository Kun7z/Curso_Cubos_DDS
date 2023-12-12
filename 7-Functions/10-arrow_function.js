//Declaração tradicional
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

//Declaração arrow function
const soma = (x, y) => {
    const resultado = x + y;        //AMBOS EXATAMENTE MESMA COISA.
    return resultado;
}

console.log(soma(5, 2))

//única diferença do arrow function pro método de declarar função normal é que o arrow function não vai funcionar chamar independente do local onde ele esteja,
//só pode ser chamado depois de declarado, o método tradicional, posso chamar mesmo antes de declarado
//hoisting