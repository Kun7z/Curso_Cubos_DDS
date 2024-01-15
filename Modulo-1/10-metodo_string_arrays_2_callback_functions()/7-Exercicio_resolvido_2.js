/*
Exercício Resolvido 2

Crie uma função que percorra um array com nomes de arquivos. A função deve verificar se possui ao menos um
arquivo com a extensão ".bat", Caso exista, deverá exibir a mensagem "vírus detectado", caso contrário, deverá
exibir a mensagem "nenhum vírus encontrado".
*/

const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.exe',

]

const verificaVirus = (array) => {
    const resultado = arquivos.some((string) => {
        return string.includes('.bat')
    })
    if (resultado) {
        console.log("vírus detectado")
    } else {
        console.log("nenhum vírus encontrado")
    }
}

verificaVirus(arquivos)

