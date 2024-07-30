const knex = require('./conexao');

// 1 - Faça uma query que retorna a quantidade de medicamentos da tabela farmacia.
const quantidadeMedicamentos = async (req, res) => {
    const quantMedicamento = await knex('farmacia').count('medicamento')
    return res.json(quantMedicamento)
}
// 2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela usuarios.
const menorIdadeUsuario = async (req, res) => {
    const menorIdade = await knex('usuarios').min('idade');
    return res.json(menorIdade)
}

//3 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos de cada categoria na tabela farmacia.
const categoriasNaoNulas = async (req, res) => {
    const categNaoNula = await knex('farmacia').select('categoria').whereNotNull('categoria').sum('estoque').groupBy('categoria')
    return res.json(categNaoNula)
}

//4 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela farmacia.
const medicamentosSemCategoria = async (req, res) => {
    const contaMedicamentosSemCategoria = await knex('farmacia').whereNull('categoria').count('estoque').groupBy('categoria')  //errei nessa, mal interpretei a questão e botei soma, ao invés de ser count, corrigido.
    return res.json(contaMedicamentosSemCategoria)
}
//5 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela farmacia.
const categoriaEQuantidade = async (req, res) => {
    const contaCategoriaEQuantidadeNaoNula = await knex('farmacia').select('categoria').whereNotNull('categoria').count('medicamento').groupBy('categoria')
    return res.json(contaCategoriaEQuantidadeNaoNula)
}
//6 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela
const idadeEQuantidade = async (req, res) => {
    const contaIdadeEQuantidade = await knex('usuarios').where('idade', '>', 18).select('idade').count('idade').groupBy('idade')
    return res.json(contaIdadeEQuantidade)
}

module.exports = { quantidadeMedicamentos, menorIdadeUsuario, categoriasNaoNulas, medicamentosSemCategoria, categoriaEQuantidade, idadeEQuantidade };