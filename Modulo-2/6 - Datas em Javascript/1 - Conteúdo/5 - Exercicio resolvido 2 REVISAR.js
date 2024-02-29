/*
A final da copa do mundo de 2002 foi vencida pelo Brasil com dois Gols de Ronaldo Fenômeno:
1. O primeiro aos 22 minutos do segundo tempo
2. O segundo aos 34 minutos do segundo tempo
Sabendo que um tempo tem 45 minutos e que são 15 minutos de intervalo, crie dois objetos com datas em que ocorreram cada um dos gols. Use
Timestamps.

*/

//1- 

const finalDaCopa2002 = new Date(2002, 5, 30, 8, 0, 0, 0);
const timestampFinalDaCopa2002 = +finalDaCopa2002;
//console.log(timestampFinalDaCopa2002);
const tempoDePartida = 105 * 60 * 1000  //105 minutos * 60 para dar os segundos * 1000 para dar os milisegundos.
const timeStampPrimeiroGol = (timestampFinalDaCopa2002 - tempoDePartida) + (45 + 15 + 22) * 60 * 1000;
const timeStampSegundoGol = (timestampFinalDaCopa2002 - tempoDePartida) + (45 + 15 + 34) * 60 * 1000;

const DataPrimeiroGol = new Date(timeStampPrimeiroGol);
const DataSegundoGol = new Date(timeStampSegundoGol);

console.log(DataPrimeiroGol, DataSegundoGol)

