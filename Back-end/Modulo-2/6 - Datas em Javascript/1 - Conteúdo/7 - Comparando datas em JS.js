/*
- Datas são objetos, portanto são comparados por referência.

- Ou seja, new Date(0) !|I== new Date(0), apesar de ser o mesmo momento, vai dar que são diferentes, porque alocam diferentes espaços na memória, foi como foi
construído a arquitetura.

- Ou seja, caso queira comparar se é o mesmo momento, use timestamps.

- +(new Date(0)) === +(new Date(0)

- Caso queira comparar anterioridade ou posterioridade, use timestamps e os operadores tradicionais >, <, >= e <=.

Exemplo:
*/

const dateOntem = new Date('2024-02-26T20:01:11.930Z')

const dateOntem2 = new Date('2024-02-26T20:01:11.930Z')

console.log(+dateOntem === +dateOntem2)  //true
console.log(dateOntem === dateOntem2)  //false
