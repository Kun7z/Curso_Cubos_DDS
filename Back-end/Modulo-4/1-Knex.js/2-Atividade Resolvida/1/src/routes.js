const express = require('express');
const { quantidadeMedicamentos, menorIdadeUsuario, categoriasNaoNulas, medicamentosSemCategoria, categoriaEQuantidade, idadeEQuantidade } = require('./controlador');
const route = express();

//1
route.get('/quantidadeMedicamentos', quantidadeMedicamentos);
//2
route.get('/menorIdade', menorIdadeUsuario);
//3
route.get('/categoriaNaoNula', categoriasNaoNulas)
//4
route.get('/medicamentosSemCategoria', medicamentosSemCategoria)
//5
route.get('/contaCategoriaEQuantidade', categoriaEQuantidade)
//6
route.get('/idadeEQuantidade', idadeEQuantidade)

module.exports = route;
