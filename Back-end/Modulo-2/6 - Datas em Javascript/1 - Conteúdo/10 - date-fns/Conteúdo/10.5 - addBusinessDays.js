const { addBusinessDays } = require('date-fns');

const date = new Date(2018, 2, 13, 12);
console.log(date)
console.log(addBusinessDays(date, 30));  //adiciona 30 dias úteis
console.log(date) // ainda retorna a mesma data inicial 2018-03-13T15:00:00.000Z pois ele cria um novo objeto, não altera o valor do objeto principal, se eu quero guardar, crio uma nova variável

