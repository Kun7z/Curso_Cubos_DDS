//Parâmetro nome possui uma tipagem dinâmica, enquanto não for declarado, seria como ele fosse type any
const saudacao = (nome) => {
    console.log(`Olá ${nome}`)
}

saudacao('Eric')

//Outro exemplo:

const nome = "Eric" //string, pois está em "", não precisando que seja declarado que é um dado do tipo string
const idade = 24 //number, pois é um número inteiro, sem aspas, não precisando ser declarado
const array = ['Matheus', 'Kuntz', 'Thibes'] //array, pois é um array com itens em strings, não precisando ser declarado

//dessa forma, assumimos que o Javascript possui uma tipagem de suas variáveis dinâmica.