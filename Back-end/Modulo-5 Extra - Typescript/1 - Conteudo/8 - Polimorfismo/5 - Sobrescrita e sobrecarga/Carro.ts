export abstract class Carro {
    ano: number
    velocidade: number
    cor: string
    modelo: string
    constructor(ano: number) {
        this.ano = ano
        this.velocidade = 0
    }

    acelerar(): void {
        this.velocidade++
    }

    definirCaracteristicas(cor: string, modelo: string): void {
        this.cor = cor
        this.modelo = modelo
    }
    abstract ligarTurbo(): void
}