export class BancoDeDados<T> {
    private dados: T[]  //array de tipo genérico T. Poderia ser tipado com o Generic Array<T>, daria no mesmo.

    constructor() {
        this.dados = []
    }
    adicionar(dado: T): void {
        this.dados.push(dado)
    }

    listar(): T[] {
        return this.dados
    }
}

interface Usuario {
    id: number,
    nome: string
}

const usuario = new BancoDeDados<Usuario>()

usuario.adicionar({
    id: 1,
    nome: 'Eric'
})

console.log(usuario.listar())