const { usuarios } = require('../bancodedados')
const listarUsuarios = async (req, res) => {
    return res.json(usuarios)
}

const cadastrarUsuario = async (req, res) => {
    return res.json('tudo ok')
}
module.exports = { listarUsuarios, cadastrarUsuario };