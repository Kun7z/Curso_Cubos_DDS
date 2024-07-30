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


app.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await pool.query(`select * from empresas where id = ${id}`);

        return res.json(resultado.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)