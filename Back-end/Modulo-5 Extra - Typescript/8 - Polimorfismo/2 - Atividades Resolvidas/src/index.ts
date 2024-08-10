import { ContaCorrente } from "./ContaCorrente";
import { Cliente } from "./Cliente";

const cliente = new Cliente({ nome: 'Eric', cpf: '123', email: 'email@email.com.br' })
const conta = new ContaCorrente({ numero: '123', agencia: '0001', senha: '123', cliente: cliente, saldo: 0 })

console.log(conta)
console.log(conta.depositar(100))
console.log(conta)