const express = require('express');
const fs = require('fs/promises');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    await fs.writeFile('./src/a.txt', 'Olá')  //caso o arquivo contenha algo escrito, ele sobescreve tudo que tem no arquivo.
    res.json('ok')
})

app.listen(3000);

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    const teste = await fs.readFile('./src/usuarios.json')

    const pessoas = JSON.parse(teste);

    pessoas.push({
        nome,
        idade
    })

    const pessoasStringify = JSON.stringify(pessoas);

    await fs.writeFile('./src/usuarios.json', pessoasStringify)

    return res.json('Pessoa cadastrada com sucesso');
})