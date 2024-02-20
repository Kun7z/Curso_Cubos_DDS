/*
Gerador de Nickname
Crie uma função que receba um nome e gere um nickname seguindo o padrão a seguir.

O nickname deve conter, no máximo, 13 caracteres;
Deve começar sempre com "@";
Não deve existir espaços em branco;
São permitidos apenas caracteres minúsculos.
Entrada
A entrada do seu programa será composta por uma variável:

nome: Nome que se tornará um nickname;
const nome = 'Guido Cerqueira';

Para o exemplo acima, deverá imprimir:

@guidocerquei
*/

function solucao(nome) {
    nickname = nome.toLowerCase().split(' ',)
    let nome_junto = ''
    for (i of nickname) {
        nome_junto += i;
    }
    nome_junto_split = nome_junto.slice(0, 12);
    nickname_final = nome_junto_split.padStart(13, '@');
    return nickname_final;
}

teste = solucao('Guido Cerqueira')


console.log(teste)