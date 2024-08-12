//Interfaces podem ser usadas também para tipar. Ao invés de eu criar um type, posso só criar uma interface com os tipos que vai ter o mesmo efeito. Mais aprofundadamente possui algumas diferenças, mas no exemplo abaixo possui exatamente o mesmo efeito:

type TUsuario = {
    nome: string,
    email: string,
    senha: string
}
//=
interface IUsuario {
    nome: string
    email: string
    senha: string
}
//Nenhuma diferença

abstract class Usuario {
    nome: string
    email: string
    protected senha: string

    constructor(usuario: IUsuario) {
        this.nome = usuario.nome
        this.email = usuario.email
        this.senha = usuario.senha
    }

    abstract login(senha: string): boolean

}

class Gerente extends Usuario {
    constructor(usuario: IUsuario | TUsuario) {  //tanto faz
        super(usuario)
    }

    login(senha: string): boolean {
        if (this.senha != senha) {
            return false
        }
        return true
    }
}