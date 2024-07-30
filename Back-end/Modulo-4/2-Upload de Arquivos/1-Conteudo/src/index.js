require('dotenv').config()
const express = require('express');
const multer = require('./multer');
const { uploadFile, listarArquivos, excluirArquivo } = require('./storage');


const app = express();

app.use(express.json());

//upa apenas 1 arquivo
app.post('/upload', multer.single('arquivo'), async (req, res) => {
    const { file } = req;
    try {
        const arquivo = await uploadFile(`imagens/${file.originalname}`, file.buffer, file.mimetype)
        return res.status(201).json(arquivo);
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }

})

//upa varios arquivos
app.post('/upload-multiple', multer.array('arquivo'), async (req, res) => {
    const { files } = req;
    try {
        const resultado = []

        for (const file of files) {
            const arquivo = await uploadFile(`imagens/${file.originalname}`, file.buffer, file.mimetype)

            resultado.push(arquivo);
        }

        return res.json(resultado);
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }

})

app.get('/arquivos', async (req, res) => {
    try {
        const files = await listarArquivos();
        return res.json(files)
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
})

//deleta arquivo
app.delete('/arquivo', async (req, res) => {
    const { file } = req.query;
    try {
        await excluirArquivo(file);
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
})

app.listen(process.env.PORT);