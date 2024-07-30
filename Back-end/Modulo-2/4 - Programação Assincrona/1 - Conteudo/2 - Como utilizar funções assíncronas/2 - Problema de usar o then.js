const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground')


/*
Desse modo, dependendo de qual função responder anteriormente, definido pelo ciclo de eventos do NodeJS, pode ser que a primeira função ou a segunda responda antes,
quase como se fosse aleatório, fazendo com que se você quer que uma responda antes para ter um sentido, não funcione dessa forma:

Para obter diferentes respostas, execute esse script várias vezes que vai ver a aleatoriedade.
*/

getCityFromZipcode('89120000').then((cidade) => {
    console.log(cidade)
})

getStateFromZipcode('89120000').then((uf) => {
    console.log(uf)
})

/* Caso eu queira que a função getCityFromZipCode responda por primeiro, posso imputar a função getStateFromZipCode dentro da callback function then da função 
getCityFromZipCode.

Exemplo:

(Execute várias vezes para perceber como sempre responderá a cidade e depois o estado)
*/

getCityFromZipcode('89120000').then((cidade) => {
    console.log(cidade)
    getStateFromZipcode('89120000').then((uf) => {
        console.log(uf)
    })
})

/*
Mas qual o problema de utilizar o then? De escrever códigos dessa forma? É que se eu querer utilizar 10 funções assíncronas, e querer que sejam respondidas em uma certa
ordem, meu código vai ficar muito identado, fazendo com que depois de muitas funções uma dentro da outra, fique difícil de entender ele, fique um código feio
e de certa forma confuso. 
*/
