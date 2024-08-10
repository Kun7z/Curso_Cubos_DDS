//Sub-classe, class herdeira da super class Funcionario
import { Funcionario } from './1 - Funcionario'

export class Vendedor extends Funcionario {
    constructor(nome: string, salario: number, private comissao: number) {
        super(nome, salario)
    }

    public calcularSalario(): number {
        return this.salario + this.comissao
    }
}