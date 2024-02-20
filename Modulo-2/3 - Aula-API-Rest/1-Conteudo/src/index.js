const express = require('express')
const app = express();

const { rotas } = require('./rotas');  //importa rotas.

app.use(express.json())  //middleware nativo do express que só aceita informações em JSON;

app.use(rotas);  //vai usar somente as rotas do arquivo rotas.

app.listen(3000);
