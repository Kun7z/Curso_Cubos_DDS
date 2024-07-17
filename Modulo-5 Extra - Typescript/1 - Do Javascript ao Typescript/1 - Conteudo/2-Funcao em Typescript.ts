//Em typescript precisamos sempre tipar, ou seja, definir o tipo de dado de uma variável ou parâmetro. Por exemplo:

const saudacao = (nome: string) => {  //função de antes, porém agora precisamos sempre definir o tipo de dado esperado no parametro nome 
    console.log(`Olá ${nome}`)
}

saudacao('Eric Kuntz')


//-----------------

const saudacao2 = (nome: string): string => { //também podemos tipar o que é esperado de retorno dessa função.
    console.log(`Olá ${nome}`)
    return `Olá ${nome}`;  //se tiparmos o retorno, sempre é obrigado retornar algo na função.
}

saudacao2('Eric Kuntz')

//PARA INICIAR UM ARQUIVO .TS npx ts-node "nome do arquivo", isso com o ts-node baixado.