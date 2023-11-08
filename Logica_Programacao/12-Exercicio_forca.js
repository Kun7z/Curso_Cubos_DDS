/*
Você está desenvolvendo um jogo de forca para a sua empresa. No jogo da forca o usuário tem que descobrir qual é a palavra que está escondida escolhendo letras que ele acredita que esteja contida nessa palavra.

Seu papel como desenvolvedor, é fazer a parte do código que ao receber a letra palpite do usuário e a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

A entrada será sempre duas strings, o palpite feito pelo jogador e a palavra a ser descoberta. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.
*/

palavra_secreta="estrela";
tentativa="e";
let quantidade = 0;

for (const letra of palavra_secreta){
    if (letra===tentativa){
        quantidade+=1;
    }
}
console.log(quantidade)