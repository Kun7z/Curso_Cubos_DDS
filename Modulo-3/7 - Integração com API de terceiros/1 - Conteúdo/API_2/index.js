const express = require('express')
const app = express();

app.use(express.json());

const carros = [
    {
        modelo: "s10",
        marca: "chevrolet"
    },
    {
        modelo: "fusion",
        marca: "ford"
    }
]

app.get('/', async (req, res) => {
    res.json(`olá da api 2. Porta 3001`)
})

app.get('/carros', async (req, res) => {
    return res.json(carros);
})


app.post('/carros', async (req, res) => {
    const { modelo, marca } = req.body

    carros.push({
        modelo,
        marca
    })

    return res.json(carros);
})
app.listen(3001);