const hoje = new Date();

console.log(hoje.getMonth());  //retorna 1, sendo na data que escrevo fevereiro, pois Janeiro 0, fevereiro 1.
console.log(hoje.getDay())  // retorna 2, pois hoje 27/02/2024 é terça-feira, retorna dia da semana
console.log(hoje.getFullYear())  //retorna 2024, ano.

//posso também alterar a data, por exemplo:  

hoje.setDate(4);  //altera o dia, setando um número do dia, hoje sendo dia 27, alterando para o dia 4
console.log(hoje)