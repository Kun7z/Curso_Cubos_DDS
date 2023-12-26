/*
Sistema de filtro de comentários
Assim como o YouTube exclui vídeos que falem pandemia ou covid, uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.

Faça um sistema que verifique o texto de um comentário e caso exista qualquer uma das duas palavras citada anteriormente imprima: COMENTARIO BLOQUEADO, se não, imprima: COMENTARIO AUTORIZADO.

É necessário bloquear a palavra em qualquer formato (Maiúscula, Minúscula...)

Entrada
A entrada do seu programa será composta por uma variável:

comentario: comentário a ser analisado pelo seu programa;
Saída
Você deve retornar:

"COMENTARIO BLOQUEADO": se houver alguma das palavras proibídas: covid, pandemia;
"COMENTARIO AUTORIZADO": se não houver nenhuma das palavras proibídas.
Exemplo
ENTRADA 1
comentario = "Esse COVID é muito perigoso!"

SAÍDA 1
"COMENTARIO BLOQUEADO"
*/


//MINHA RESOLUÇÃO

function solucao(comentario) {
    separar_palavras = comentario.split(' ')
    for (const i of separar_palavras) {
        if (i == 'pandemia' || i == 'PANDEMIA' || i == 'COVID' || i == 'covid') {
            return 'COMENTARIO BLOQUEADO'
        }
    } if (comentario != 'COMENTARIO BLOQUEADO') {
        return 'COMENTARIO AUTORIZADO'
    }

}

let resultado = solucao('Essa fase realmente virou nossas vidas de cabeça para baixo. ')
console.log(resultado)

//RESOLUÇÃO PROFESSOR

const comentario2 = "Esse COVID é muito perigoso!"

const achouCovid = comentario2.toLowerCase().includes('covid');

const achouPandemia = comentario2.toLowerCase().includes('pandemia');

if (achouCovid || achouPandemia) {
    console.log('Comentario bloqueado por conter palavras proibidas')
} else {
    console.log('Comentário autorizado')
}
