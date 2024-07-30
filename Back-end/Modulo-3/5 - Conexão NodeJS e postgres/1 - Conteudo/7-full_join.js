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

//diferentemente do left ou right join, o FULL join, vai trazer TODOS os registros de ambas as tabelas, empresas e filiais, mesmo que elas não tenham a relação entre as mesmas.
app.get('/full', async (req, res) => {
    try {
        const query = `select e.id as empresaID, f.id as filialID, e.nome, f.pais 
        from empresas e 
        full join filiais f on e.id = f.empresa_id`

        const resultado = await pool.query(query);

        return res.json(resultado)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)