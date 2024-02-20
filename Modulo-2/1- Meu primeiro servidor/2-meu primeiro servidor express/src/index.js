const express = require('express')

const app = express();  //instancia do express

app.get('/', (requisicao, resposta) => {
    resposta.send('Olá, esse é meu primeiro servidor com o express.')
})

app.listen(3000);