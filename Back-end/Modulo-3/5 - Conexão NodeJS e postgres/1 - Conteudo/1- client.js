const express = require('express');
const { Client } = require('pg')

const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    const client = new Client({     //dados da conexão do banco de dados
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123',
        database: 'aula_conexao_node_pg'
    })

    try {
        await client.connect()  //async para chamar um client

        const resultado = await client.query('select * from empresas');  //query

        await client.end() //encerra conexão

        //return res.json(resultado)

        //caso eu não queira que apareça numero de linhas, tipos da tabela, etc, posso só dar select no que tiver na tabela

        return res.json(resultado.rows)//método rows, para retornar só as linhas
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000)