const express = require('express');
const { Pool } = require('pg')

const app = express();
app.use(express.json())

const pool = new Pool({     //dados da conexão do banco de dados
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'aula_conexao_node_pg'
})

//pool não precisa iniciar nem finalizar a conexão, porque ele já faz isso.
app.get('/', async (req, res) => {
    try {
        const resultado = await pool.query('select * from empresas');  //query

        return res.json(resultado.rows)//método rows, para retornar só as linhas
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)