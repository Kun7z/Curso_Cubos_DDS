import { Gerente } from "./2 - Gerente";
import { Programador } from "./3 - Programador";
import { Vendedor } from "./4 - Vendedor";

const eric = new Programador('Eric', 2000, ['Python', 'Javascript']);
const ana = new Gerente('Ana', 2000, '123');
const joao = new Vendedor('joao', 2000, 1500);

console.log(eric, ana, joao)