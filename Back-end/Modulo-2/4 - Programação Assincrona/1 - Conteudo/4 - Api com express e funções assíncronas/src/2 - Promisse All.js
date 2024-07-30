const express = require('express');
const app = express();
const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground')

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('89120000');
    const cidade2 = getStateFromZipcode('89120000')

    const promise = await Promise.all([cidade, cidade2])

    const [resposta1, resposta2] = promise;  //desestruturação

    return res.send(`A cidade encontrada foi: ${resposta1} e ${resposta2}`)
});

app.listen(3000)