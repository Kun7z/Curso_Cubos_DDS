import { Camaro } from "./Camaro";
import { Fusca } from "./Fusca";
import { Fusion } from "./Fusion";
import { TestaCarro } from "./TestaCarro";

const fusca = new Fusca(1970)

fusca.acelerar()
fusca.ligarTurbo()
console.log(fusca.velocidade)  //retorna 51
//Mesmo que a classe fusca não tenha o método ligarTurbo, na classe pai possui, fazendo com que o turbo seja o valor padrão na classe pai.

//Para isso determinamos que a classe pai Carro, seja uma classe abstract, ou abstrata, que não é concreto.  No caso significa que ela vai servir apenas como assinatura de outra classe. Com isso, todos os métodos abstratos daquela super classe, nesse exemplo sendo a Carro, precisam ser assinados nas suas classes filhos (recriados)