/*

Filtro de usuários


Crie um programa que filtre as pessoas pela profissão e pela idade. O filtro da idade refere-se às pessoas que são maiores ou iguais à idade passada no filtro. 
O retorno do filtro deve ser uma string com o nome das pessoas. Caso não exista ninguém que corresponde ao filtro aplicado, retorne a mensagem NAO ENCONTRADO.

Exemplo:

Filtre o array e retorne apenas os programadores que sejam maiores ou iguais a 20 anos.

Para o requisito acima, o resultado deve ser:

'Ana, Marcos'
*/

const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]

function solucao(pessoas, profissao, idade) {
    const resultado = pessoas.filter((objeto) => {
        return objeto.profissao === profissao && objeto.idade >= idade;
    })
    if (resultado.length == 0) {
        return 'NAO ENCONTRADO';
    }
    const nomesFiltrados = [];
    for (let i = 0; i < resultado.length; i++) {
        nomesFiltrados.push(resultado[i].nome);
    }
    return nomesFiltrados.join(", ");
}


console.log(solucao(pessoas, 'Programador', 20))