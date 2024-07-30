const fs = require('fs');  //filesystem

//leitura de arquivo assíncrona
console.log('antes de ler');

fs.readFile('a.txt', (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});


console.log('depois de ler');

