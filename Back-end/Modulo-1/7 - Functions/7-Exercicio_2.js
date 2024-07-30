/*
Faça uma função que tem um parâmetro
chamado idade e que determina a faixa
etária de uma pessoa a partir dessa idade.
e 21 anos ou menos -> jovem

e 22 a 65 anos -> adulto(a)

e 66 ou mais anos -> idoso(a)

Sua função deverá retornar um string que
informa se a pessoa é jovem, adulto(a) ou
idoso(a)
*/


function idade(idade) {
    if (idade <= 21) {
        return 'jovem'
    } else if (idade >= 22 && idade <= 65) {
        return 'adulto(a)'
    } else {
        return 'idoso'
    }
}

console.log(idade(67))