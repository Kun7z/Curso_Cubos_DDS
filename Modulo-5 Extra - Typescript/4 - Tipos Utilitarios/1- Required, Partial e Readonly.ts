type Usuario = {
    nome: string,
    idade?: number,
    email: string
}
//Required -> Todos os dados tem de ser informados. Utilitário.
const cadastrarUsuario = (usuario: Required<Usuario>) => {
    return usuario;
}

cadastrarUsuario({
    nome: 'Eric',
    idade: 24,  //mesmo que no type Usuario idade está como opcional utilizando o ?, tem de ser passado por conta do utilitário Required.
    email: 'eric@eric.com.br'
})
//-----------------------------------------------------

//Partial -> Pode ser passado parcialmente os dados, mesmo que no type criado, eu não tenha determinado que aquele valor deve ou não ser enviado com um ? Exemplo: idade?:number
const cadastrarUsuario2 = (usuario: Partial<Usuario>) => {
    return usuario;
}

cadastrarUsuario2({
    nome: 'Eric'  //mesmo que no type Usuario só o opcional seria o idade:, ele não taxa erro, porque é sub-entendido que é opcional os items do tipo. Se executado não vai dar erro!!
})
//-----------------------------------------------------

//Readonly -> permite que os dados apenas sejam lidos/consultados e não alterados. Exemplo:

const eric: Readonly<Usuario> = {
    nome: 'Eric',
    email: 'eric@eric.com.br'
}

//se eu tentar alterar uma propriedade desse objeto, taxará erro.

//eric.nome = 'Matheus';

