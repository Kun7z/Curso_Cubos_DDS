const express = require('express');
const app = express();
const { getCityFromZipcode } = require('utils-playground')

app.get('/', async (req, res) => {
    const cidade = await getCityFromZipcode('89120000');

    return res.send(`A cidade encontrada foi: ${cidade}`)
});

app.listen(3000)