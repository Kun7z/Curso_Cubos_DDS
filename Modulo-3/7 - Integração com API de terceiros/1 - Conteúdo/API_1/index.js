const express = require('express')
const axios = require('axios')

const app = express();
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001'
})

app.use(express.json());

app.get('/', async (req, res) => {
    //res.json(`olá da api 1. Porta 3000`)

    // const resultadoAxios = await axios.get('http://localhost:3001/carros')

    // console.log(resultadoAxios.data)

    const novoCarro = {
        modelo: 'fusca',
        marca: 'Volkswagen'
    }

    // const resultadoAxios = await axios.post('http://localhost:3001/carros', novoCarro);

    const resultadoAxios = await axiosInstance.post('/carros', novoCarro)

    return res.json(resultadoAxios.data);
})



app.listen(3000);