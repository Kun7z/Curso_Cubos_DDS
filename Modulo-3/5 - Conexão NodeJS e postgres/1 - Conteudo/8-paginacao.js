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


app.get('/full', async (req, res) => {
    const { pagina, porPagina } = req.query
    try {
        const { rowCount } = await pool.query('select * from pessoas')

        const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina //lê-se, se página for igual a 1, offset será 0, do contrário, ou seja, se página for por exemplo 2, página será subtraído 1 e multiplicado pelo número de páginas, ou seja se forem 10 registros por página, será múltiplicado 1 por 10, resultando em 10, sendo assim offset será 10.

        const resultado = await pool.query(query, [porPagina, offset])
        const result = {
            pagina,
            porPagina,
            total: rowCount,
            registros: resultado.rows,
        }
        return res.json(result)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)