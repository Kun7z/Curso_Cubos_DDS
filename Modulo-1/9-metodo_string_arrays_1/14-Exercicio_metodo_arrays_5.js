/*
Encontrar dono do pet
Abaixo temos uma lista de cadastro de usuários e seus respectivos pets. Crie uma função que facilite encontrar o dono de um pet específico.

Entrada
A entrada do seu programa será composta por um objeto que possui uma variavel do tipo nome que é string e um array do tipo string:

usuarios: variavel do tipo string
nome: Array do tipo string


Saida
A saida do seu programa será composta uma string única dividida por virgula:

const usuarios = [
    {
        nome: "gabriel",
        pets: ["pipoca", "pudim"],
    },
    {
        nome: "jorge",
        pets: ["wii", "butter"],
    },
    {
        nome: "maria",
        pets: ["lulu"],
    },
]
*/

const usuarios = [
    {
        nome: "gabriel",
        pets: ["pipoca", "pudim"],
    },
    {
        nome: "jorge",
        pets: ["wii", "butter"],
    },
    {
        nome: "maria",
        pets: ["lulu"],
    },
]


function solucao(usuarios, nome) {
    let resultado = false;
    let usuario = '';
    for (i = 0; i < usuarios.length; i++) {
        let pets = usuarios[i].pets.join()

        let pet_usuario = pets.includes(nome)



        if (pet_usuario) {
            resultado = true
            usuario = usuarios[i].nome;  //coleta nome de usuário
        }

    }
    if (resultado) {
        return (`O dono(a) do(a) ${nome} é o(a) ${usuario}`)
    } else {
        return (`Que pena ${nome}, não encontramos seu dono(a)`)
    }
}

teste = solucao(usuarios, 'wii')
console.log(teste)