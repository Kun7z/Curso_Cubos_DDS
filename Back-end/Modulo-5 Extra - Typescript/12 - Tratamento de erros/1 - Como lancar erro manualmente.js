try {
    console.log('Primeiro')
    throw 'Segundo'
    console.log('Terceiro')  // não é lançado, porque o código ele para no momento que é realizado o throw, similar a um return.
} catch (error) {
    console.log(error)
}

//----------------

try {
    throw new Error() // tudo até aqui vai ser executado, mas aqui ele vai chamar um erro, mesmo não dando erro em nada. Tratamento padrão do javascript.
} catch (error) {
    console.log(error)
}

//---------------------

try {
    throw new Error('Posso passar também uma mensagem customizada do erro')  //Iso pode ajudar a quando a aplicação dar erro, ajudar a pessoa que vai ler o que ocorreu. Para testar isso, comentar o código de cima.
} catch (error) {
    console.log(error)
}

//--------------------------

try {
    throw new ReferenceError('Erro de referência.')  //Posso passar um erro com um tipo específico também, se encaixar, também podendo ser adicionado uma mensagem customizada.
} catch (error) {
    console.log(error)
}