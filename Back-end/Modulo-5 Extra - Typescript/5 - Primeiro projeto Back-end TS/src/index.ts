import 'dotenv/config'
// import dotenv from 'dotenv'
// dotenv.config({ path: './src/.env' }); //alternativa
import express from 'express'
import rota from './rotas'
console.log(process.env.DB_HOST)
//também não entendi porque tenho de fazer export default as vezes, e as vezes só fazer o export em cada constante; lembrar de pedir isso
const app = express()
app.use(express.json())
app.use(rota)

app.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000')
})