const fs = require('fs/promises');

(async () => {
    const arquivoJson = await fs.readFile('teste.json')

    const pessoas = JSON.parse(arquivoJson);  //transforma de string em JSON, parsea a string em JSON.

    pessoas.push({
        nome: 'Guido',
        idade: 31

    })  //aqui eu estou acessando o conteúdo do JSON, através do metodo .push para inserir mais um item ao array.

    const arrayJSON = JSON.stringify(pessoas);  //retransformando de JSON para string

    console.log(pessoas);
})()