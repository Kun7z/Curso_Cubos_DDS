const express = require('express')

const {
    cadastrarUsuario,
    login,
    obterPerfil
} = require('./controladores/usuarios')

const {
    listarCarros,
    detalharCarro,
    cadastrarCarro,
    atualizarCarro,
    excluirCarro,
} = require('./controladores/carros');

const { verificarUsuarioLogado } = require('./middleware/autenticacao');

const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', login);

rotas.use(verificarUsuarioLogado)

rotas.get('/perfil', obterPerfil)

rotas.get('/carro', listarCarros);
rotas.get('/carro/:id', detalharCarro);
rotas.post('/carro', cadastrarCarro);
rotas.put('/carro/:id', atualizarCarro);
rotas.delete('/carro/:id', excluirCarro);


module.exports = rotas