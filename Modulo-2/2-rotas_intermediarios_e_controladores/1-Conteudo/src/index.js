const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores')

const app = express();


const intermediarioDaRotaProfessores = (req, res, next) => {
    console.log('Passei no intermediário da rota professores')
    next()
}

//middleware, filtro, intermediário
app.use()

//parametros de consulta 
//localhost:3000/professores?stack=Backend
app.get('/professores', intermediarioDaRotaProfessores, filtrarProfessores)


//parametros de rota
//localhost:3000/2
app.get('/professores/:id', encontrarUmProfessor)

app.listen(3000)