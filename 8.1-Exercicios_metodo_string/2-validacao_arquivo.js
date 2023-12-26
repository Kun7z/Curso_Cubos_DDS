/*
Validação de arquivos
Crie uma função que receba o nome do arquivo com sua extensão e faça a validação dos arquivos permitidos conforme a lista abaixo.

São permitidos arquivos: jpg, jpeg, gif e png;
Entrada
A entrada do seu programa será composta por uma variável:

index: Formato de arquivo;
Saída
Você deve retornar:

"arquivo válido": se houver alguma das extensões validas: jpg, gif;
"arquivo inválido": se houver algumas das extensões invalidas: pdf, exe
Exemplo 1:

ENTRADA 1
index = 'Foto da Familia.pdf'

SAÍDA 1
"Arquivo inválido"

EXPLICAÇÃO 1
O arquivo é no formato .pdf por isso que é um Arquivo inválido

Exemplo 2:

ENTRADA 2
index = 'Foto da Familia.jpg'

SAÍDA 2
"Arquivo válido"
*/



function solucao(index) {
    index_minusculo_procurar_extensao = index.toLowerCase().split('.')
    if (index_minusculo_procurar_extensao[1] == 'jpg' || index_minusculo_procurar_extensao[1] == 'gif' || index_minusculo_procurar_extensao[1] == 'jpeg' || index_minusculo_procurar_extensao[1] == 'png') {
        return 'Arquivo válido'
    } else {
        return 'Arquivo inválido'
    }
}


teste = solucao('Foto da Familia.jpg')
console.log(teste)