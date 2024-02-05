/*
Crie uma função que localize um endereço em um array através do CEP e imprima o nome da rua.

Caso o CEP não exista, retorne a frase RUA NAO ENCONTRADA.

Dica: Utilizar o método find()

const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]
Supondo que o CEP informado na função seja 00222444, o resultado deve ser:

Avenida Paralela
*/
const enderecos = [
    { cep: '00111222', rua: "Rua dos Artistas" },
    { cep: '00111333', rua: "Rua Augusta" },
    { cep: '00222444', rua: "Avenida Paralela" },
    { cep: '11222333', rua: "Rua Carlos Gomes" },
]


function solucao(enderecos, cep) {
    const encontraCEP = enderecos.find((endereco) => {
        return endereco.cep === cep
    })
    return encontraCEP.rua
}

console.log(solucao(enderecos, '00222444'))