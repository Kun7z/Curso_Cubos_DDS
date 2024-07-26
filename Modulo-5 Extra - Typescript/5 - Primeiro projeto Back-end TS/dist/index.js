"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// import dotenv from 'dotenv'
// dotenv.config({ path: './src/.env' }); //alternativa
const express_1 = __importDefault(require("express"));
const rotas_1 = __importDefault(require("./rotas"));
console.log(process.env.DB_HOST);
//também não entendi porque tenho de fazer export default as vezes, e as vezes só fazer o export em cada constante; lembrar de pedir isso
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(rotas_1.default);
app.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
});
