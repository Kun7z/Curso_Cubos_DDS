// Testa se ao menos um dos elementos do array passam pelo teste implementado na função callback passada como argumento e retorna true ou false

//Exemplo:

const nomes = ['eric', 'giancarlo', 'joao', 'maria'];

const resultado = nomes.some((nome) => {
    return nome === 'joao';
});

console.log(resultado)