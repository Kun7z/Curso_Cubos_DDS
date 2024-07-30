const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');


//Utilizando função anonima a fim de estudo, tema será abordado em aulas futuras.

//async await

//async = cria função assíncrona

//await = ele vai esperar a resposta da função para executar a próxima linha
(async () => {
    const cidade = await getCityFromZipcode('89120000')
    console.log(cidade);

    const estado = await getStateFromZipcode('89120000')
    console.log(estado);
})();

