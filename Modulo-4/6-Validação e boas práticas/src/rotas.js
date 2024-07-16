const express = require('express');

const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios');
const validaSchema = require('./middleware/validaSchema');
const { schemaCadastrarUsuario } = require('./schemas/usuarios/schemaCadastrarUsuario');

const rota = express();


rota.get('/usuario', listarUsuarios)
rota.post('/usuario', validaSchema(schemaCadastrarUsuario), cadastrarUsuario)
module.exports = rota;