let { identificadorAula, instrutores, aulas } = require('../bancodedados');


const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;


    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id == idInstrutor;
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe' })
    }

    if (!titulo) {
        return res.status(404).json({ mensagem: 'É obrigatório informar o título da aula' })
    }
    if (!descricao) {
        return res.status(404).json({ mensagem: 'É obrigatório informar a descrição da aula' })
    }
    const aula = {
        id: identificadorAula++,
        instrutor_id: idInstrutor,
        titulo,
        descricao
    }
    aulas.push(aula)

    return res.status(201).json(aula);
}

const listarAulas = (req, res) => {
    return res.status(200).json(aulas)
}

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id == id;
    })

    if (!aula) {
        return res.status(400).json({ mensagem: 'Aula não encontrada' })
    }

    res.status(200).json(aula)
}

const obterAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id == idInstrutor;
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe' })
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id == instrutor.id;
    })

    if (!aulasEncontradas) {
        return res.status(400).json({ mensagem: 'Aulas não encontradas para este professor' })
    }

    res.status(200).json(aulasEncontradas)
}

module.exports = { cadastrarAula, listarAulas, obterAula, obterAulasInstrutor }