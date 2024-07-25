//Omit<Type,Keys>

type User = {
    nome: string,
    idade: number,
    email: string
}

type Keys = 'nome' | 'idade';

//No caso o omit faz ao contrário do Pick, eu determino a partir de um Tipo, qual propriedade quero ignorar, no caso através da Chave Keys determino que quero ignorar o nome e idade, restando apenas o email para ser adicionado.

const usuario: Omit<User, Keys> = {
    email: 'eric@eric.com.br'
}

// Da mesma forma que criei em Pick um Tipo com o omit, pode ser feito aqui também

type newUser = Omit<User, Keys>;

const usuario2: newUser = {
    email: 'eric@eric.com.br'
}