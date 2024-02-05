const lodash = require('lodash')  // chama todos os métodos dentro da biblioteca uniq

const { uniq } = require('lodash')  //desestruturação, não se fazendo mais necessário escrever lodash.uniq
const array = [1, 2, 4, 4, 6, 7, 1];

const array_unico = lodash.uniq(array);  //método .uniq dentro da biblioteca lodash, exibe apenas itens únicos dentro do array.

const array_unico2 = uniq(array)

console.log(array_unico)    //output [ 1, 2, 4, 6, 7 ]
console.log(array_unico2)   //output [ 1, 2, 4, 6, 7 ]