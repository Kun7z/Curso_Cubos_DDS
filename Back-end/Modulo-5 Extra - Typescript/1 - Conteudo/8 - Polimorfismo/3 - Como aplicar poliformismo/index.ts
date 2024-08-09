import { Camaro } from "./Camaro";
import { Fusion } from "./Fusion";
import { TestaCarro } from "./TestaCarro";

const fusion = new Fusion(2004)
const camaro = new Camaro(2010)

const testaFusion = new TestaCarro(fusion)  //como é uma sub-classe que extende da classe carro, ele aceita o tipo carro, não dando erro.
fusion.ligarTurbo()
console.log(fusion.velocidade)
camaro.ligarTurbo()
console.log(camaro.velocidade)

console.log(testaFusion.carro.ligarTurbo())  //da erro poprque ele não consegue acessar o método ligar Turbo de dentro da classe pai, porque os métodos estão na classe filha. 