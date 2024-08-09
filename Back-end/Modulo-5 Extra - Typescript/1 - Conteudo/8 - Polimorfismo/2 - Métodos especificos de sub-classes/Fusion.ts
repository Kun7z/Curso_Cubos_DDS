import { Carro } from "./Carro";

export class Fusion extends Carro {
    constructor(ano: number) {
        super(ano)
    }

    ligarTurbo(): void {
        this.velocidade += 100
    }
}