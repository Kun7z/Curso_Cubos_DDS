//Union types

let algumaCoisa: number | string;

algumaCoisa = 'guido';
console.log(typeof algumaCoisa) //string

algumaCoisa = 23;
console.log(typeof algumaCoisa) //number

//mas pq usar Union types e não any?

const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {  //aqui eu poderia realizar o cadastro de um único objeto usuário, ou estar cadastrando mais de 1 usuário, um array de objetos, fazendo assim o Union type, qualquer coisa sem ser um objeto, como uma string, array, number, boolean, vai dar erro, assim possibilitando não ser tão permissivo.

    return usuarios;
}

const usuario = {
    nome: 'Guido'
}

const usuarios = [
    {
        nome: 'Ruli'
    },
    {
        nome: 'Diego'
    }
]

cadastroUsuarios(usuarios);