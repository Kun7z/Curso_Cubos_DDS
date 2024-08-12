// Na sua essência, interfaces definem contratos públicos, ou seja, se sua classe precisa privar ou proteger algum atributo, deve ser utilizado o abstract ao invés de interfaces.

interface ICarro {
    ano: number,
    velocidade: number

    acelerar(): void
}

class Fusca implements ICarro {
    ano: number
    velocidade: number
    //private velocidade: number  da erro

    constructor(ano: number) {
        this.ano = ano
        this.velocidade = 0
    }

    acelerar(): void {
        this.velocidade += 1
    }
}