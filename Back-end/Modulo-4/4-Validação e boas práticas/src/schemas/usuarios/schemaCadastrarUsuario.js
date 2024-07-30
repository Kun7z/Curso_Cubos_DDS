const joi = require('joi');

const schemaCadastrarUsuario = joi.object({
    nome: joi.string().required().empty().min(3).max(20).messages({
        'string.base': 'O campo nome deve ser uma string.',
        'string.empty': 'O campo nome não pode ser uma string vazia.',
        'any.required': 'O campo nome é obrigatório',
        'string.min': `O campo nome precisa conter pelo menos caracteres`,
        'string.max': 'O campo nome só pode conter no máximo 20 caracteres.'
    }),
    email: joi.string().email().required().empty().messages({
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email não pode ser vazio.',
        'string.base': 'O campo email deve ser em formato string.',
        'string.email': 'O campo email precisa ser do tipo formato "email@exemplo.com."'
    }),
    senha: joi.string().min(4).empty().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.base': 'O campo senha deve ser em formato string.',
        'string.empty': 'O campo senha não pode ser vazio.',
        'string.min': 'O campo senha deve ter no minimo 3 caracteres.'
    })
})

module.exports = { schemaCadastrarUsuario }