//ReturnType<function>

type Exemplo = () => string //tipo que recebe uma função e retorna uma string

type Exemplo2 = ReturnType<Exemplo>;  //Tipo exemplo tem o retorno de uma função uma string, logo o tipo Exemplo2 é de uma string.

type Exemplo3 = () => {
    nome: string
}

type Exemplo4 = ReturnType<Exemplo3>