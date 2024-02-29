const { format } = require('date-fns');  //desestruturando para apenas importar a função format da lib date-fns

const date = new Date(2017, 3, 12);

console.log(format(date, 'dd/MM/yyyy'))
console.log(format(date, 'dd-MM-yyyy'))
console.log(format(date, "dd 'de' MM 'de' yyyy"))  //para eu botar texto no meio, PRECISA ser aspas duplas a string, e o texto no meio em aspas simples.