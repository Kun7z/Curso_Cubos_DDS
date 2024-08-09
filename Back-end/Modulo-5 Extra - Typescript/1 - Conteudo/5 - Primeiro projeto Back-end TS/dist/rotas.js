"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carros_1 = require("./controladores/carros");
const rota = (0, express_1.Router)();
rota.get('/carros', carros_1.listarCarros);
rota.get('/carros/:id', carros_1.detalharCarro);
rota.post('/carros', carros_1.cadastrarCarro);
exports.default = rota;
