import conexao from 'knex'

export const knex = conexao({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin',
        database: 'typescript'
    },

})