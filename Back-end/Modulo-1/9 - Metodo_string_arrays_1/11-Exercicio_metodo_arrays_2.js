/*

const animais = ['Pipoca', 'Pudim', 'Puff', 'Sheik'];

Entrada
A entrada do seu programa será composta por um array do tipo string:

animais: Array do tipo string

Saida
A saida do seu programa será composta uma string única dividida por uma barra vertical |

Dado o array acima, faça o seguinte:

Remova o primeiro e último item do array original e adicione o animal Amora a uma nova string da seguinte forma:

"Pudim | Puff | Amora"

*/

function solucao(animais) {
    animais.shift();
    animais.pop();
    animais.splice(animais.length, 0, 'Amora')
    const string_animais = animais.join(' | ')
    return string_animais
}

const animais = ['Pipoca', 'Pudim', 'Puff', 'Sheik'];

teste = solucao(animais);
console.log(teste)