const { add } = require('date-fns');

//permite somar ou subtrair datas.

const date = new Date(2018, 2, 13, 12);
console.log(date)

console.log(add(date, { seconds: 2 }));  //adicionado 2 segundos a data

console.log(add(date, {
    seconds: 2,
    days: 1
}));  //adicionado 2 segundos e 1 dia

console.log(add(date, {
    seconds: 2,
    days: 1,
    year: 1
}));//adicionado 2 segundos, 1 dia e 1 ano.

console.log(date) //ainda retorna a mesma data inicial 2018-03-13T15:00:00.000Z pois ele cria um novo objeto, não altera o valor do objeto principal, se eu quero guardar, crio uma nova variável





