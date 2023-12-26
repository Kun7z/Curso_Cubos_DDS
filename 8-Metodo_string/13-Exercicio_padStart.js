/*

Faça uma função chamada imprimir data que
tem 3 parâmetros: dia, mês e ano.

Essa função deve imprimir na tela a data passada
como argumento no seguinte formato, de modo
que ela sempre tenha 8 dígitos no total:

* 01/01/2021

* 18/02/1991

Utilize padStart para garantir que isso aconteça.,
Sempre passe argumentos do tipo number

*/

function imprimirData(dia, mes, ano) {

    const diaFormatado = String(dia).padStart(2, '0')
    const mesFormatado = String(mes).padStart(2, '0')
    const anoFormatado = String(ano).padStart(2, '0')
    console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`)
}

imprimirData(1, 1, 2000)