const cadastro = (info?: { nome: string, valor?: number }) => {
    console.log(`Você cadastrou ${info!.nome}`); //exclamação em parâmetros opcionais assegura ao typescript q o parâmetro opcional vai ser informado.
}

cadastro({
    nome: 'Gol'
})

// ! non null assertion

cadastro();  //caso seja chamado a função e não for informado o parâmetro, o typescript vai acusar erro em algum momento em que vc tenha interagido com algum item da função, etc, depende do que vc vai encaminhar de parâmetro, nesse caso os items do objeto.