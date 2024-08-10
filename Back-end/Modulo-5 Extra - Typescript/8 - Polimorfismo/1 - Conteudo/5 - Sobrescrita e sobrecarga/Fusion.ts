import { Carro } from "./Carro";

export class Fusion extends Carro {
    constructor(ano: number) {
        super(ano)
    }

    ligarTurbo(): void {
        this.velocidade += 100
    }

    //ligarTurbo(x: param) { }  dessa forma da erro pois na classe pai, o método não aceita parâmetros, então tem de ter o mesmo padrão, mesmo que haja diferença no resultado.
}