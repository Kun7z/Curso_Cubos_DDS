//sintaxe

//str.lastIndexOf(searchValue[,fromIndex])  // [] é talvez, não obrigatório.

//ao contrário do IndexOf, ele procura de trás pra frente o searchvalue, no str.

//exemplo:

const string = 'ricardo';

console.log(string.lastIndexOf('r'));  //Retorna 4.
console.log(string.lastIndexOf('a', 3));  //Retorna 3, procurando a partir do índice 3.
console.log(string.lastIndexOf('a', 0));  //Retorna -1, porque não foi encontrado a letra 'a' a partir do índice 0.
console.log(string.lastIndexOf('x'));  //Retorna -1, porque não tem X dentro da string
console.log(string.lastIndexOf('r', -5));  //Retorna 0. Sempre que for número negativo não faz sentido, então o próprio método entende que é 0. Como no índice 0 tem a letra R ele da match e retorna o índice corretamente.
console.log(string.lastIndexOf('r', 0));  //Retorna 0.
console.log(string.lastIndexOf(''));  //Retorna 7 porque como não está sendo procurado nada, o nada seria tudo, não faz muito sentindo, mas seria +1 do string.length.
console.log(string.lastIndexOf('', 2));  //Retorna 2. 
