const express = require('express');
const rota = require('./rotas')

const app = express();

app.use(express.json());
app.use(rota);

app.listen(3000)