const professores = require('../bancodedados');


//parametros de consulta 
//localhost:3000/professores?stack=Backend
const filtrarProfessores = (req, res) => {
    const { stack } = req.query;
    let resultado = professores;

    console.log('Cheguei no controlador de listagem de professores')

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        })
    }
    res.send(resultado)
}

//parametros de rota
//localhost:3000/professores
const encontrarUmProfessor = (req, res) => {
    console.log('Rota para encontrar um professor')
    const professorEncontrado = professores.find((professor) => {
        return professor.id == req.params.id
    })
    res.send(professorEncontrado)
}

module.exports = { filtrarProfessores, encontrarUmProfessor }