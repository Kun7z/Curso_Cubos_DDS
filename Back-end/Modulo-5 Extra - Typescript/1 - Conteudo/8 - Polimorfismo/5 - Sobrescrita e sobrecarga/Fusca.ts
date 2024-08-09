import { Carro } from "./Carro";

export class Fusca extends Carro {
    constructor(ano: number) {
        super(ano)
    }
    ligarTurbo(): void {
        this.velocidade += 70
    }
    definirCaracteristicas(cor: string): void {  //parâmetro a ser passado pelo usuario quando chama o método
        this.cor = cor  //SOBRESCRITA
    }
    //EM OUTRAS LINGUAGENS, ISSO ABAIXO É PERMITIDO, SE CHAMANDO SOBRECARGA, NO TYPESCRIPT NÃO É, POR ISSO DA ERRO.
    // definirCaracteristicas(cor: string, modelo: string): void {
    //     this.cor = cor  //SOBRESCRITA
    // }

    //Porém para contornar esse erro, podemos fazer dessa forma:

    //Atribuimos um parametro adicional ao método da classe pai(superclasse), e botamos como opcional no método da classe filho
    // definirCaracteristicas(cor: string, modelo?: string): void {  //parâmetro a ser passado pelo usuario quando chama o método
    //     this.cor = cor  //SOBRESCRITA
    //     this.modelo = modelo//sobrecarga

    // }
}