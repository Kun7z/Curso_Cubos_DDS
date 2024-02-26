const fsPromises = require('fs/promises');

console.log('antes de ler');

(async () => {
    const a = await fsPromises.readFile('a.txt')

    console.log(a.toString())
})();

console.log('depois de ler')