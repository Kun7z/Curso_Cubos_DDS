//mês Janeiro começa com o valor 0 e não 1, dia começa com o dia 1.

const date = new Date(2020, 0, 1, 0, 0, 0, 0);  //Construtor Date aceita vários parâmetros, mas o MÍNIMO, é o ano e o mês.


console.log(date) // 2020-01-01T03:00:00.000Z - Retorna hora 03, porque o Brasil possui UTC-3, logo quando vamos fazer a conta, todo horário que eu passo, eu faço +3.

//Sendo assim, se eu passar hora 2, vai retornar 05:00:00, porque são +3 horários de fuso.

const date2 = new Date(2020, 0, 1, 12, 30, 45, 916)  // lê-se, ano 2020, mês janeiro, dia 12, horário 15, minutos 30, segundos 45, 916 milésimos.

//obs: novamente, horário retorna 15, porque são 3h a mais de fuso comparado ao Brasil, 12+3=15, logo 15:30:45, nesse exemplo.