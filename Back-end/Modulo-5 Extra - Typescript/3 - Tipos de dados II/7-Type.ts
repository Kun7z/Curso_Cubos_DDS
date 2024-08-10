//objeto muito grande, acaba ficando ilegível uma função em que cada item do objeto que será mandado apareça esse bloco enorme de código.

const cadastrar = (info: { nome: string, idade: number, email: string, cpf: string }) => {

}

//pra isso criamos tipos

type Usuario = {
    nome: string,
    idade: number,
    email: string,
    cpf: string
}

const cadastrando = (info: Usuario) => {
    //codigo...
}

const cadastrando2 = (info: Usuario) => {
    //codigo....
}

// com isso, com 1 único tipo, consigo determinar em diferentes locais do código, o que eu espero receber naquele parâmetro.
//----------------------
//Também podemos criar tipos dentro de tipos, exemplo:

type Endereco = {
    rua: string,
    numero: string,
    bairro: string,
    cidade: string
}

type imovel = {
    nome: string,
    valor: number,
    endereco: Endereco
}