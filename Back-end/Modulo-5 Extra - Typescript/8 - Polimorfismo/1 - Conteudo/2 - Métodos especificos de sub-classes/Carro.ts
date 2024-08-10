export class Carro {
    ano: number
    velocidade: number
    constructor(ano: number) {
        this.ano = ano
        this.velocidade = 0
    }

    acelerar(): void {
        this.velocidade++
    }
}