const express = require('express');
const app = express();
const { listagemProdutos, vendas } = require('./controladores/vendas');

app.use(express.json());

app.get('/produtos', listagemProdutos);
app.post('/produtos', vendas);

app.listen(3000);