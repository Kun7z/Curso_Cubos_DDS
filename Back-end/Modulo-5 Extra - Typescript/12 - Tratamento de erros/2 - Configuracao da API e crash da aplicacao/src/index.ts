import express, { NextFunction, Request, Response } from 'express'
import { ApiError } from './ApiError'

const app = express()

app.use(express.json())

//#Aula 1 - Crash da aplicação
app.get('/', (req: Request, res: Response) => {// Tipos do @types/express
    return res.json('Tudo certo')  //Para testar o erro, só comentar
    throw new Error('Lancei um erro de forma elegante')
    return res.json('ok')  //não chega a ser executado, porque a requisição já para no erro da linha acima.
})

//#Aula 2 - Middleware de manipulaçõo de erros.
//Abaixo middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {  //tipo Error, vem nativo do JS
    console.log(err.message)  //classe Erro, possui os métodos .message, .name e .stack? sendo o último opcional por conta do ?
})

//#Aula 3 - Classe personalizada de erro

app.post('/', (req: Request, res: Response) => {
    const { nome } = req.body

    if (!nome) {
        throw new ApiError('O campo nome é obrigatório', 401)  //Cria uma exceção, cria um novo erro, sendo impresso pelo
    }
    return res.json(`Tudo certo ${nome}`)
})

//TENHO UMA DUVIDA, PORQUE QUE ESTÁ FUNCIONANDO ISSO SE O MIDDLEWARE ESTÁ VINDO DEPOIS DO ENDPOINT
//Catch all -> MIDDLEWARE
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    return res.status(err.statusCode).json({ message: err.message })
})


app.listen(3000, () => { console.log('Servidor rodando na porta 3000') })