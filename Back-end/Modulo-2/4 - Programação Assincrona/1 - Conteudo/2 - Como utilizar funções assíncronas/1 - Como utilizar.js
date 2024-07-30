const { getCityFromZipcode } = require('utils-playground')

//.then = vai ser o que vai ser feito quando retornar a resposta daquela função assíncrona, quando deixar de ser pending para fulfilled.
//.catch = retorna o erro caso tenha algum erro, se não tiver erro, não imprime nada
getCityFromZipcode('89120000').then((cidade) => {
    console.log(cidade)
}).catch((erro) => {
    console.log(erro);
})

