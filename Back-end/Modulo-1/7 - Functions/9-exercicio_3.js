/*
Faça uma função de apresentação que,
por sua vez, chama a função que
determina a faixa etária. No fim das
contas, a saída deve ser como no exemplo
abaixo:

"Olá! Meu nome é João, sou um jovem de
12 anos, l.4m de altura e sou estudante"

A palavra jovem, neste exemplo, deve vir
do retorno de uma função.

*/


const dados_pessoa = {
    nome: 'José',
    idade: 30,
    profissao: 'professor'
}

function faixaetaria(idade) {
    if (idade.idade < 25) {
        let faixa_etaria = 'jovem';
        return faixa_etaria;
    }
    else if (idade.idade < 65) {
        let faixa_etaria = 'adulto(a)';
        return faixa_etaria;
    }
    else {
        let faixa_etaria = 'idoso(a)'
        return faixa_etaria;
    }
}



function apresentacao(pessoa) {
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaetaria(dados_pessoa)} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

apresentacao(dados_pessoa)