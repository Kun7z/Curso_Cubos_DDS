const palavra = 'Alemanha';

let encontrado = false;

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('Tem letra H')
        encontrado = true;
        break;  //Encontrou o que eu procurava denrto da string e parou de processar desnecessariamente.
    }
}

if (encontrado === false) {  //!encontrado
    console.log("Não tem H")
}
