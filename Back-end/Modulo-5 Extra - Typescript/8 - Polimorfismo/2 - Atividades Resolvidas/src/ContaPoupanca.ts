import { ContaBancaria, tipoContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    private taxaRendimento: number

    constructor(dadosConta: tipoContaBancaria) {
        super(dadosConta)
        this.taxaRendimento = 0.05
    }

    depositar(valor: number): string {
        return `Saldo: R$ ${this.saldo += valor}`
    }

    sacar(valor: number, senha: string): string {
        if (senha == this.senha) {
            if (valor > this.saldo) {
                return `Saldo insuficiente`
            }
            return `Saldo: R$ ${this.saldo -= valor}`
        }
        return `Senha incorreta`
    }
}