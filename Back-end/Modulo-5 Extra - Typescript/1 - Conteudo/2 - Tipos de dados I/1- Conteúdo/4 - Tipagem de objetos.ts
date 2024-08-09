let usuario = {
    nome: 'Guido',
    idade: 12,
    ativo: true
}

// Caso eu não tipar os objetos, se eu passar o mouse em cima do usuario, vai aparecer os componentes do objeto com a tipagem de cada item do objeto, mas para tiparmos os items do objeto, o ideal seria fazer isso:

let usuarioTipado: { nome: string, idade: number, ativo: boolean } = {
    nome: 'Guido',
    idade: 12,
    ativo: true
};

//Inclusive podemos apenas criar a variável e só declarar o tipo de dados, sem a necessidade de valores no item, exemplo:

let usuarioTipadoSemValores: { nome: string, idade: number, ativo: boolean };

//aí podemos adicionar valores a esse objeto respeitando a tipagem de dados dos items.

usuarioTipadoSemValores = {
    nome: 'Eric',
    idade: 23,
    ativo: false
};

console.log(usuarioTipadoSemValores)