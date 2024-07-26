import { Router } from 'express';
import { cadastrarCarro, detalharCarro, listarCarros } from './controladores/carros';

const rota = Router();

rota.get('/carros', listarCarros);
rota.get('/carros/:id', detalharCarro)
rota.post('/carros', cadastrarCarro)

export default rota;  //aqui eu uso o export default, porque eu literalmente só vou usar ele no index.ts e vai ser utilizado todas as funções (endpoints) esperando requisições, não sendo necessário exportar cada função chamada.