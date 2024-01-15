/*
Fila de atendimento

Uma clínica médica precisa automatizar o processo de atendimento aos pacientes que acontece por ordem de chegada. Crie uma função que receba três argumentos, sendo eles, 
a lista de todos os pacientes na fila, o tipo de operação para um paciente, que pode ser atender ou agendar e o nome do paciente.

Entrada
Uma variavel podendo ser do tipo ateder ou agendar e o nome de um novo paciente (Caso utilizar o atender não é necessario adicionar um novo nome):

pacientes: Array do tipo string
tipo: Variavel do tipo string podendo ser `atender` ou `agendar`
pessoa: Variavel do tipo string


Saida
A saida do seu programa será composta uma string única dividida por virgula:

Caso a operação informada seja agendar, o paciente em questão deverá ser adicionado ao final da lista e excluido o primeiro paciente.

Pedro, Maria, João, Ana, Bárbara, Joana, guido
Caso seja atender, o próximo (primeiro) paciente da fila deverá ser removido e não é obrigatório informar o nome do paciente na função.

Pedro, Maria, João, Ana, Bárbara, Joana

*/
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana']
const tipo = 'atender';
const pessoa = 'José'

function solucao(pacientes, tipo, pessoa) {
    if (tipo === 'atender') {
        pacientes.shift();
        return (pacientes);
    }

    else if (tipo === 'agendar') {
        pacientes.push(pessoa);
        pacientes.shift();
        return (pacientes)
    }
}

teste = solucao(pacientes, tipo, pessoa);