let nome: 'guido';  //estou dizendo que estou atribuindo o tipo Guido ao nome

//nome = 'Cerqueira';  //se eu tento reatribuir o tipo Guido com o valor Cerqueira, o Typescript vai retornar erro.

type Transacao = {
    numero: number,
    validade: string,
    cvv: number,
    nome: string,
    tipo: 'credito' | 'debito'  //nesse tipo literal, só pode receber crédito ou débito, sendo tipos LITERAIS.
}