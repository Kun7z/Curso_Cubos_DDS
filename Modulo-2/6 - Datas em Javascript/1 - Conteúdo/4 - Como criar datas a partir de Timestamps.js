/*

Timestamps é mm número que representa um momento da história. Esse número é a quantidade de milissegundos que passaram desde
primeiro de janeiro de 1970, a 00:00:00.000 em Greenwich.

Exemplo, se tenho o número 1000, é igual a um segundo depois do reveillion de 1969 para 1970 em Greenwich.

Outro exemplo:
*/

const finalDaCopa2002 = new Date(2002, 5, 30, 8, 0, 0, 0);

console.log(+finalDaCopa2002)
/*utilizando o + na frente da variavel que armazena o momento do final da copa de 2002, retorna 1025434800000, 
ou seja, são 1025434800000 de milissegundos desde o reveillion de 1969 para 1970.*/

const timestamp = +finalDaCopa2002;  // armazeno o timestamp da data dentro da variavel
const timestamp2 = finalDaCopa2002.getTime();  //funciona do mesmo jeito que o operador +, retorna também o timestamp da data da variável.

const timestampMaisUmaHora = timestamp + 1000 * 60 * 60;  // adiciono 1000 milisegundos vezes 60 para dar 60 segundos, vezes 60 novamente para dar 60 minutos, totalizando 1h.

console.log(timestamp, timestampMaisUmaHora)

//agora pra transformar isso de timestamp, para uma data, é só adicionar a variável timestamp, ou o valor timestamp dentro do objeto Date.

const dataTimeStampMaisUmaHora = new Date(timestampMaisUmaHora);

console.log(dataTimeStampMaisUmaHora)