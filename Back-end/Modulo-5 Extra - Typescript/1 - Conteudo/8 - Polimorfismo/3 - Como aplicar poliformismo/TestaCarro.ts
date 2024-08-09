import { Carro } from "./Carro";

export class TestaCarro {
    carro: Carro
    constructor(carro: Carro) {
        this.carro = carro
    }

    testeTurbo(): void {
        this.carro.ligarTurbo()
    }
}