//Sub-classe, class herdeira da super class Funcionario

import { Funcionario } from './1 - Funcionario'

export class Programador extends Funcionario {
    constructor(nome: string, salario: number, private linguagens: string[]) {
        super(nome, salario)
    }

}