"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCarro = exports.atualizaCarro = exports.cadastrarCarro = exports.detalharCarro = exports.listarCarros = void 0;
const conexao_1 = require("../bancoDeDados/conexao");
const listarCarros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carros = yield (0, conexao_1.knex)('carros');
        res.json(carros);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });
    }
});
exports.listarCarros = listarCarros;
const detalharCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const carro = yield (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        res.json(carro);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });
    }
});
exports.detalharCarro = detalharCarro;
const cadastrarCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        if (!marca || !modelo || !ano || !cor || !valor) {
            return res.status(400).json({ mensagem: "Faltou informar valores para adicionar o carro." });
        }
        const carro = yield (0, conexao_1.knex)('carros').insert({ marca, modelo, ano, cor, valor }, "*");
        if (!carro) {
            res.json({ mensagem: "Erro ao adicionar o carro" });
        }
        return res.status(201).json(carro);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });
    }
});
exports.cadastrarCarro = cadastrarCarro;
const atualizaCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const procuraCarro = yield (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!procuraCarro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        yield (0, conexao_1.knex)('carros').where({ id: Number(id) }).update({ marca, modelo, ano, cor, valor }, "*");
        return res.status(204).send();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });
    }
});
exports.atualizaCarro = atualizaCarro;
const excluirCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const procuraCarro = yield (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!procuraCarro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        yield (0, conexao_1.knex)('carros').where({ id: Number(id) }).delete();
        return res.status(204).send();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });
    }
});
exports.excluirCarro = excluirCarro;
