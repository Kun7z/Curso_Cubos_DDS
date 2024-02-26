const fs = require('fs');  //file system 
const fsPromises = require('fs/promises');  //file system promises só aceita funções assíncronas

console.log('antes de ler');

//fs.readFileSync não existe na biblioteca fs/promises
const a = fsPromises.readFile('a.txt')

a.then((data) => {
    console.log(data.toString())
})

a.catch((erro) => {
    console.log(erro)
})

console.log('depois de ler')