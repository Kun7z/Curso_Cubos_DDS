const jwt = require('jsonwebtoken')
const senhaJwt = require('../senhaJwt');
const pool = require('../conexao')

const verificarUsuarioLogado = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(req)
    if (!authorization) {
        return res.status(401).json({ "mensagem": "Não autorizado" })
    }

    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, senhaJwt)

        const { rows, rowCount } = await pool.query('select * from usuarios where id=$1', [id])

        if (rowCount < 1) {
            return res.status(401).json({ "mensagem": "Não autorizado" })
        }

        req.usuario = rows[0];
        console.log(req);

        next();
    } catch (error) {
        return res.status(401).json({ "mensagem": "Usuário não autorizado" }
        );
    }
}

module.exports = { verificarUsuarioLogado }