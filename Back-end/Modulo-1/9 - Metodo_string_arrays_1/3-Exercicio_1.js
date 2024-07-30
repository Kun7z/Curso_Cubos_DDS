/*
Faça uma função que recebe parâmetros do tipo
string e imprime na tela essa string invertida, ou
seja, de trás para frente.

Dica: lembre-se que o método reverse() só pode
ser chamado por arrays.

*/

//MINHA RESOLUÇÃO

function inverterString(texto) {
    const texto_to_array = texto.split('')
    texto_to_array.reverse()
    let texto_invertido = '';
    for (i = 0; i < texto_to_array.length; i++) {
        texto_invertido += texto_to_array[i]
    }
    return (texto_invertido)
}

teste = inverterString('sei la')
console.log(teste)

//RESOLUÇÃO DO PROFESSOR

//muito similar a minha, não vale a pena copiar o código