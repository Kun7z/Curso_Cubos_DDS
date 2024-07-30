const express = require('express');
const { listAgenda, insertData, listAgendaById, updateRegister, deleteRegister } = require('./controlador');
const route = express();

route.get('/agenda', listAgenda);
route.get('/agenda/:idParam', listAgendaById);
route.post('/insereRegistro', insertData);
route.put('/atualizaRegistro/:id', updateRegister)
route.delete('/deletaRegistro/:id', deleteRegister)
module.exports = route;
