const { getCityFromZipcode } = require('utils-playground')


/*basicamente, eu só vou ter resposta da função getCityFromZipcode, depois de ele consultar nos arquivos da biblioteca e ter a resposta, o que demora mais que um 
simples console.log(), fazendo com que seja executado primeiro as funções de console.log(), depois é respondido a função da biblioteca, mas a função console.log('fim')
não precisa que a função getCityFromZipcode tenha a resposta pra depois executar ela.*/

console.log('inicio');

getCityFromZipcode('89120000').then(cidade => {
    console.log(cidade);                            //FUNCAO ASSINCRONA DA LIB UTILS-PLAYGROUND
})

console.log('fim')

