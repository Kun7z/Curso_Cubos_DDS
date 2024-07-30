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

// left no caso ele vai trazer todos os resultados a esquerda do join, ou seja nesse exemplo, vai trazer todos os resultados  de empresas, mesmo que ele não encontre uma relação entre empresas id e filial empresa_id, se fosse um inner join nesse caso teria 30 resultados, mas como empresas tem 31 registros, sendo que um é null, vai trazer esse registro também por último por não conseguir associar ele a tabela filiais. Exemplo, temos a empresa de ID 2 yahoo, que tem duas filiais, ID 16 e 12, mas a empresa Facebook de ID 16, não possui filiais, logo ela vai trazer esse registro obrigatoriamente como null em relação pois não existe relação, mas vai contabilizar na resposta.
app.get('/left', async (req, res) => {
    try {
        const query = `
        select e.id as empresaID, f.id as filialID, e.nome, f.pais 
        from empresas e 
        left join filiais f on e.id = f.empresa_id
        `

        const resultado = await pool.query(query);

        return res.json(resultado)
    } catch (error) {
        console.log(error.message)
    }
})
//right, mesma coisa que o left, porém ele vai trazer obrigatoriamente todos os registros a direita do join, no caso agora com filiais, em que caso não encontre uma relação com empresa_id, vai retornar um valor null, aqui ele retorna 30 registros porque uma filial precisa obrigatoriamente ter uma empresa, não tendo assim registros de filiais sem uma empresa.
app.get('/right', async (req, res) => {
    try {
        const query = `
        select e.id as empresaID, f.id as filialID, e.nome, f.pais 
        from empresas e 
        right join filiais f on e.id = f.empresa_id
        `

        const resultado = await pool.query(query);

        return res.json(resultado)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)