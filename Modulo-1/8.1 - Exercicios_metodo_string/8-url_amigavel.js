/*
URL Amigável
Faça um sistema que transforma um texto em uma URL amigável.

Obs.: Uma URL amigável é formada por caracteres minúsculos, separados por hífen, sem espaços.

Entrada
A entrada do seu programa será composta por uma variável:

texto: Texto em formato de string a ser formatado pelo seu programa;
Exemplo:
const texto = "Aprenda programar do zero na Cubos Academy";

Para o exemplo acima, o sistema deverá retornar:

aprenda-programar-do-zero-na-cubos-academy
*/

//MINHA RESOLUÇÃO

function solucao(texto) {
    //texto_minusculo = texto.toLowercase()
    const texto_separado = texto.split(' ')
    let url_formatada = '';
    for (let i = 0; i < texto_separado.length; i++) {
        if (i < texto_separado.length - 1) {
            url_formatada += `${texto_separado[i]}-`
        } else {
            url_formatada += texto_separado[i]
        }
    }
    return (url_formatada.toLowerCase())
}

teste = solucao("Aprenda programar do zero na Cubos Academy")
console.log(teste)

//RESOLUÇÃO DO PROFESSOR

//MUITO SIMILAR A MINHA, NÃO COPIAREI O CÓDIGO PORQUE BASICAMENTE SÓ FICOU FORA DA FUNCTION

