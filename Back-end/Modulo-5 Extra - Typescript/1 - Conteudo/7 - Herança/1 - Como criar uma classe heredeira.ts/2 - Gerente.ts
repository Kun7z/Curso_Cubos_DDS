//Sub-classe, class herdeira da super class Funcionario

import { Funcionario } from './1 - Funcionario'

export class Gerente extends Funcionario {
    constructor(nome: string, salario: number, private senha: string) {
        super(nome, salario)
    }

    public validarSenha(senha: string) {
        if (senha == this.senha) {
            return `Gerente autorizado`
        }
        return `Gerente não autorizado`
    }
}