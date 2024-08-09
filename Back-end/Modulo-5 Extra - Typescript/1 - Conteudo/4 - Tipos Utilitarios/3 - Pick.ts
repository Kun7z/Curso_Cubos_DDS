//Pick<type,keys>

type Usuario = {
    nome: string,
    idade: number,
    email: string
}

type Chaves = 'nome' | 'idade';

//Com o Pick, eu defino através das chaves (tipo absoluto), quais são as propriedades do meu tipo que eu preciso preencher, que nesse caso, são o nome ou idade utilizando a key(chave) Chaves.

const eric: Pick<Usuario, Chaves> = {
    nome: 'Eric',
    idade: 24
}

//Eu poderia passar as chaves direto, também funcionaria, exemplo:

const eric2: Pick<Usuario, 'nome' | 'idade'> = {
    nome: 'Eric',
    idade: 24
}

//Posso também criar um novo tipo, com esse tipo utilitário Pick. Exemplo:

type NovoUsuario = Pick<Usuario, 'nome' | 'idade'>

const eric3: NovoUsuario = {
    nome: 'Eric',
    idade: 24
}



