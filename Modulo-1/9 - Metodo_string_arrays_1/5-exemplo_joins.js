function inverterString(texto) {
    const texto_to_array = texto.split('')
    texto_to_array.reverse()
    const texto_invertido = texto_to_array.join('');

    return texto_invertido;
}

teste = inverterString('sei la')
console.log(teste)