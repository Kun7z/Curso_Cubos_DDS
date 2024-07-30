const fs = require('fs');  //filesystem

//leitura de arquivo síncrono
console.log('antes de ler');
const a = fs.readFileSync('a.txt').toString();
console.log(a)
console.log('depois de ler');

