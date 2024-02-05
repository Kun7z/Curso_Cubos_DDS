const lodash = require('lodash')

const { uniq } = require('lodash')
const { arrayNumeros, arrayLetras } = require('./2.1-array_importar_arquivos.js')  //desestruturação das variáveis, fazendo-se assim desnecessário usar array.arrayLetras ou array.arrayNumeros.

const array = require('./2.1-array_importar_arquivos.js')  //não precisa passar a extensão, mas se passar funciona também.

const arrayUnico = uniq(arrayLetras)
const arrayUnico2 = uniq(arrayNumeros)

console.log(arrayUnico)     //variavel desestruturada
console.log(arrayUnico2)    //variavel desestruturada
console.log(array.arrayLetras)  //variavel sendo puxada como objeto pela variavel array, sem usar o método uniq do lodash.
console.log(array.arrayNumeros) //variavel sendo puxada como objeto pela variavel array, sem uasr o método uniq do lodash.