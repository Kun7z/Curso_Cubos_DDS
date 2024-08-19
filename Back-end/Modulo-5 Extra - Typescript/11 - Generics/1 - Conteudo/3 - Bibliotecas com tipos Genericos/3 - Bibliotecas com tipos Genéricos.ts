// type TCarro = {
//     id: number
//     modelo: string
//     ano: number
// }

import { knex } from "./Conexao"


// type OutroTCarro = Omit<TCarro, 'id'>
type Usuario = {
    id: number,
    nome: string,
    email: string,
    senha: string
}

const listarUsuarios = async () => {
    return await knex<Usuario>('usuarios').insert({})  //só vai aceitar os dados do Tipo Usuario, caso for fornecido algum dado diferente do tipo Usuario, taxará erro.
}
