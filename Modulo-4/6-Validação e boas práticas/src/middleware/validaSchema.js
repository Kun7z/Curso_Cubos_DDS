const validaSchema = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        return ({ mensagem: error.message })
    }
}
module.exports = validaSchema;

