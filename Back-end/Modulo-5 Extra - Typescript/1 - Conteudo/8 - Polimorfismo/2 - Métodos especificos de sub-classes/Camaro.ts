import { Carro } from "./Carro";

export class Camaro extends Carro {
    constructor(ano: number) {
        super(ano)
    }

    ligarTurbo(): void {
        this.velocidade += 300
    }
}