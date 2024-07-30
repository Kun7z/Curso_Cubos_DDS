/*
Declare uma variável que armazena um objeto
contendo as seguintes propriedades: nome,
idade, altura, tem CNH e apelidos.
Depois, faça um programa que imprime na tela o
belo texto abaixo, substituindo os dados pessoais
pelos dados do objeto:
"José tem 30 anos, 1.73m de altura, possui CNH e
os seguintes apelidos:
- Jr
- Juninho"
*/

//MINHA RESOLUÇÃO:

const pessoa = {
    nome: 'José',
    idade: 30,
    altura: 1.73,
    tem_CNH: 'possui',
    apelido1: 'Jr',
    apelido2: 'Juninho'
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.tem_CNH} CNH e os seguintes apelidos:
- ${pessoa.apelido1}
- ${pessoa.apelido2}`)

//RESOLUÇÃO DO PROFESSOR, CORRETA:

const pessoa1 = {
    nome: 'José',
    idade: 30,
    altura: 1.73,
    tem_CNH: true,
    apelidos: ['Jr', 'Juninho']

}

let textoCNH = '';

if (pessoa1.tem_CNH === true) {
    textoCNH = 'possui';
}
else {
    textoCNH = 'não possui';
}

console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos, ${pessoa1.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos:
- ${pessoa1.apelidos[0]}
- ${pessoa1.apelidos[1]}`)