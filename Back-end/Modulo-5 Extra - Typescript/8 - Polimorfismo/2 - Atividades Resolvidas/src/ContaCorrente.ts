import { ContaBancaria, tipoContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {

    private limite: number
    constructor(dadosConta: tipoContaBancaria) {
        super(dadosConta)
        this.limite = 100000  //centavos    
    }
    //teste
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