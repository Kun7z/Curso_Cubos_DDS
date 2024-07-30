const express = require('express');
const { Pool } = require('pg')

const app = express();
app.use(express.json())

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'aula_conexao_node_pg'
})

//utilizando os parametros para valores dinâmicos numa query, agora não é mais possível realizar um SQL INJECTION
app.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query = 'select * from empresas where id= $1'  //$ = parametro
        const params = [id]  //array para passar os parametros
        const resultado = await pool.query(query, params);  //query sendo executada no banco

        return res.json(resultado.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)