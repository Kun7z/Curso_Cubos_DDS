import { Request, Response } from 'express'
import { knex } from '../bancoDeDados/conexao'
import { Carro } from '../type'


//O export na frente de cada função se deve a possibilidade de poder desestruturar apenas uma função e adicionar a um arquivo em singular. Eu poderia realizar um export default, porém todas as variáveis seriam exportadas e importadas em um arquivo, não sendo performático porque seria lido todas as funções em cada arquivo que o arquivo fosse importado, mesmo se eu utilizasse 1 única função naquele arquivo.

export const listarCarros = async (req: Request, res: Response) => {
    try {
        const carros = await knex<Carro>('carros');
        res.json(carros)
    } catch (err: unknown) {
        console.log(err)
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' })
    }
}

export const detalharCarro = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const carro = await knex<Carro>('carros').where({ id: Number(id) }).first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" })
        }
        res.json(carro)
    } catch (err: unknown) {
        console.log(err)
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' })
    }
}

export const cadastrarCarro = async (req: Request, res: Response) => {
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        if (!marca || !modelo || !ano || !cor || !valor) {
            return res.status(400).json({ mensagem: "Faltou informar valores para adicionar o carro." })
        }
        const carro = await knex<Omit<Carro, 'id'>>('carros').insert({ marca, modelo, ano, cor, valor }, "*")
        if (!carro) {
            res.json({ mensagem: "Erro ao adicionar o carro" })
        }
        return res.status(201).json(carro);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' })
    }
}

export const atualizaCarro = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;

    try {
        const procuraCarro = await knex<Carro>('carros').where({ id: Number(id) }).first();
        if (!procuraCarro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" })
        }
        await knex<Carro>('carros').where({ id: Number(id) }).update({ marca, modelo, ano, cor, valor }, "*")

        return res.status(204).send()
    } catch (err) {
        console.log(err)
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' })
    }
}

export const excluirCarro = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const procuraCarro = await knex<Carro>('carros').where({ id: Number(id) }).first();
        if (!procuraCarro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" })
        }
        await knex<Carro>('carros').where({ id: Number(id) }).delete()
        return res.status(204).send();
    } catch (err) {
        console.log(err)
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' })
    }
}
