const knex = require('./conexao');

const listAgenda = async (req, res) => {
    const agendaKnex = await knex('agenda');  //select * from [nomeDaTabela]
    const agendaKnexDebug = await knex('agenda').debug();
    const agendaKnexRaw = await knex.raw('select * from agenda');  // query raw

    return res.json(agendaKnexRaw.rows);
}

listAgendaById = async (req, res) => {
    const { idParam } = req.params;

    //select * from agenda where id = idParam
    const agendaKnex = await knex('agenda').where('id', idParam);

    //select * from agenda where id != idParam
    const agendaKnexWhereComparadorParam = await knex('agenda').where('id', '!=', idParam);

    //select * from agenda where id=idParam
    const agendaKnexWhereParam = await knex('agenda').where({ id: idParam });

    //select * from agenda where id=idParam and nome= 'alguma coisa'.
    const agendaKnexComDoisWhere = await knex('agenda').where({ id: idParam, nome: "alguma coisa" });

    //select * from agenda where id=idParam limit 1 -- retornando primeira ocorrência.
    const agendaKnexRetornandoApenasObjeto = await knex('agenda').where({ id: idParam }).first();  //também retorna apenas a primeira ocorrencia, limit no SQL.

    //select id,nome from agenda where id=idParam limit 1 --retorna primeira ocorrência.
    const agendaKnexComWhereESelecionandoApenasAsColunasQueQuero = await knex('agenda').where({ id: idParam }).select('id', 'nome').first();

    //select * from agenda where email is null
    const agendaKnexWhereNullEmail = await knex('agenda').whereNull('email');

    //select * from agenda where email is not null
    const agendaKnexWhereNotNullEmail = await knex('agenda').whereNotNull('email');

    //select * from agenda where id between 5 and 10
    const agendaKnexWhereBetween = await knex('agenda').whereBetween('id', [5, 10])

    //select * from agenda order by id asc
    const agendaKnexOrderByAsc = await knex('agenda').orderBy('id', 'asc');

    //select * from agenda order by id desc
    const agendaKnexOrderByDesc = await knex('agenda').orderBy('id', 'desc');

    //select distinct email from agenda
    const agendaKnexDistinct = await knex('agenda').distinct('email');

    //select email,count(*) from agenda group by email
    const agendaKnexGroupBy = await knex('agenda').select('email').groupBy('email').count();

    //select * from agenda limit 5
    const agendaKnexLimit = await knex('agenda').limit(5);

    //select * from agenda limit 5 offset 5
    const agendaKnexLimitOffset = await knex('agenda').limit(5).offset(5);

    //select sum(id) from agenda where email is null;
    const agendaKnexSum = await knex('agenda').whereNull('email').sum('id')

    //select avg(id) from agenda where email is null;
    const agendaKnexAvg = await knex('agenda').whereNull('email').avg('id')

    //select min(id) from agenda where email is null;
    const agendaKnexMin = await knex('agenda').whereNull('email').min('id')

    //select max(id) from agenda where email is null;
    const agendaKnexMax = await knex('agenda').whereNull('email').max('id')
    return res.json(agendaKnexMax)
}

const insertData = async (req, res) => {
    const { nome, email, telefone } = req.body;

    // const insertKnexData = await knex('agenda').insert({ nome, email, telefone }).returning(['id', 'nome']);  //pode ser retornado tudo com o "*".

    const ArrayDeObjetos = [{ nome: "Maria", email: "maria@email.com", telefone: "123123" }, { nome: "Joao", email: "joao@email.com", telefone: "123123" }]

    const insertMultipleValues = await knex('agenda').insert(ArrayDeObjetos).returning('*')
    return res.json(insertMultipleValues)
}

const updateRegister = async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;

    const update = await knex('agenda').update({ nome, email, telefone }).where('id', id).returning('*');
    return res.json(update);
}

const deleteRegister = async (req, res) => {
    const { id } = req.params;

    const deleteRegistro = await knex('agenda').delete().where('id', id).returning('*');
    return res.json(deleteRegistro)
}

module.exports = { listAgenda, listAgendaById, insertData, updateRegister, deleteRegister };