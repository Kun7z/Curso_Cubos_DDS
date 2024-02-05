const express = require('express')

const app = express();

const { imprimeCarro, obterCarro } = require('./controladores/controladorCarro')
const { validarSenha } = require('./intermediarios')


app.use(validarSenha)

app.get('/carros', imprimeCarro)  //rota de listagem com filtro

app.get('/carros/:id', obterCarro)  //obter carro pelo identificador, 

app.listen(3000)