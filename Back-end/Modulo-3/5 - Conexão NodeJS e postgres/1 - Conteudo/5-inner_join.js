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

//inner JOIN
app.get('/', async (req, res) => {
    try {
        //quando dou um JOIN, o SQL já entende como se fosse inner join, então todo join sempre será um INNER JOIN
        const query = `select e.id as empresaID, f.id as filialID, e.nome, f.pais, p.nome as funcionario
        from empresas e
        join filiais f on e.id = f.empresa_id
        join pessoas p on e.id = p.empresa_id;`
        //estou resumindo o nome das tabelas na hora em que estou chamando o from e o join botando uma letra para cada tabela, por exemplo "from empresas e", "join filiais f", "join pessoas p", fazendo com que no select eu só precise resumir com esses apelidos, ex: e.id, f.id .

        //todo JOIN precisará de uma condição de comparação utilizando o ON, ex: join filiais f on e.id = f.empresa_id, comparando o ID da empresa, com o a foreign key empresa_id na tabela filial.
        const resultado = await pool.query(query);

        return res.json(resultado.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)