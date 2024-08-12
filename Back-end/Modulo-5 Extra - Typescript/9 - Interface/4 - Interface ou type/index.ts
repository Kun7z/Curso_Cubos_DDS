interface IAnimal {
    nome: string
}

type TAnimal = {
    nome: string
}

// Até o momento nenhuma diferença, porém, se eu criar uma interface agora com o mesmo nome que outra, ele adiciona um atributo a interface. Exemplo:

interface IAnimal {
    peso: number
}

/*output:

interface IAnimal{
    nome:string
    peso:number
}

Ele "Concatena a interface".
*/

//Se tentarmos com o type da erro:

//Porém, podemos concatenar tipos dessa forma para ter um resultado semelhante. Exemplo:

type TAnimal2 = TAnimal & {
    peso: number
}

