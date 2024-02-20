const express = require('express');
const rotas = express();

const { listarInstrutores, obterInstrutor, cadastrarInstrutor, atualizarInstrutor, atualizarStatusInstrutor, excluirInstrutor } = require('./controladores/instrutores')
const { cadastrarAula, listarAulas, obterAula, obterAulasInstrutor } = require('./controladores/aulas');

rotas.get('/instrutores', listarInstrutores)
rotas.get('/instrutores/:id', obterInstrutor)  //req.params.id = id;
rotas.post('/instrutores', cadastrarInstrutor)
rotas.put('/instrutores/:id', atualizarInstrutor)
rotas.patch('/instrutores/:id/status', atualizarStatusInstrutor)
rotas.delete('/instrutores/:id', excluirInstrutor)
rotas.post('/instrutores/:idInstrutor/aulas', cadastrarAula)
rotas.get('/aulas', listarAulas);
rotas.get('/aulas/:id', obterAula)
rotas.get('/instrutores/:idInstrutor/aulas', obterAulasInstrutor)
module.exports = { rotas };

