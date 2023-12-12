const pessoa = {
    nome: 'José',
    idade: 30,
    profissao: 'professor'
}

function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
    }
    else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
    }
    else {
        console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
    }
}

apresentar(pessoa)