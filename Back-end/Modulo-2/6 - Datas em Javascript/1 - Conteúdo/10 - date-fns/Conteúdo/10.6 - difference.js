/*
há diversos métodos para diferir tempo de datas dentro da biblioteca como:

differenceInMilliseconds()
differenceInSeconds()
differenceInMinutes()
differenceInHours()
differenceInBusinessDays()
differenceInCalendarDays()
differenceInDays()
differenceInWeeks()
differenceInMonths()
e etc

todos bem similares de se usar, por exemplo:
*/

const { differenceInDays } = require("date-fns");

const data1 = new Date(2024, 2, 28);
const data2 = new Date(2024, 1, 28);
console.log(differenceInDays(data1, data2)); //29 dias

//sintaxe differenceInDays(data mais velha,data mais nova); 
