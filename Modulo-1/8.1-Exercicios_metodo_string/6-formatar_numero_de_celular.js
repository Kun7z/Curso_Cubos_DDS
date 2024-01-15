
/*
Formatar número de celular

Faça um sistema que receba um número de celular, formate corretamente e adicione o 9 quando não existir seguindo os padrões a seguir:

Entrada
A entrada do seu programa será composta por uma variável do tipo number:

telefone: número a ser formatado pelo seu programa;
Saída
Você deve retornar:

"7199918888": Quando passado o número deve ser retornado já formatado (71) 9 9991-8888;
<li><code>"999"</code>: Quando passado o número deve ser retornado uma mensagem -> invalido (Sem acento)</li>
Caso exista o DDD:
const celular = 7199918888;

Será impresso:

(71) 9 9991-8888
Caso não exista o DDD:
const celular = 99918888;

Será impresso:

9 9991-8888
Caso for inválido:
const celular = 999;

Será impresso:

invalido
*/

//MINHA RESOLUÇÃO

function solucao(telefone) {
    telefone_string = String(telefone); //transforma em string


    if (telefone_string.length === 8) {
        function numeros_telefone_quando_8digitos() {
            const telefone_string_antes = telefone_string.slice(0, 4)
            const telefone_string_depois = telefone_string.slice(4, 8)
            return (`${telefone_string_antes}-${telefone_string_depois}`)
        }

        return (`9 ${numeros_telefone_quando_8digitos()}`)  //chama a function
    }
    else if (telefone_string.length === 9 && telefone_string[0] === '9') {
        function numeros_telefone_quando_9digitos() {
            const telefone_string_antes = telefone_string.slice(1, 5)
            const telefone_string_depois = telefone_string.slice(5, 9)
            return (`${telefone_string_antes}-${telefone_string_depois}`)
        }

        return (`9 ${numeros_telefone_quando_9digitos()} `)
    }
    else if (telefone_string.length === 10) {
        function numeros_telefone_quando_10digitos() {
            const ddd_telefone = telefone_string.slice(0, 2)
            const telefone_string_antes = telefone_string.slice(2, 6)
            const telefone_string_depois = telefone_string.slice(6, 10)
            return (`(${ddd_telefone}) 9 ${telefone_string_antes}-${telefone_string_depois}`)
        }

        return (`${numeros_telefone_quando_10digitos()}`)
    }
    else if (telefone_string.length === 11) {
        function numeros_telefone_quando_11digitos() {
            const ddd_telefone = telefone_string.slice(0, 2)
            const telefone_string_antes = telefone_string.slice(3, 7)
            const telefone_string_depois = telefone_string.slice(7, 11)
            return (`(${ddd_telefone}) 9 ${telefone_string_antes}-${telefone_string_depois}`)
        }

        return (`${numeros_telefone_quando_11digitos()}`)
    }
    else {
        return ('invalido')
    }



}

teste = solucao(12312312312123)
console.log(teste)

//RESOLUÇÃO DO PROFESSOR

const celular = '99918888';

const formatarCelular = (numero) => {
    let celularFormatado;

    if (numero.length === 8) {
        celularFormatado = `9 ${numero.slice(0, 4)}-${numero.slice(4)}`
        console.log(celularFormatado);
    } else if (numero.length === 9) {
        celularFormatado = `${numero.slice(0, 1)} ${numero.slice(1, 5)}-${numero.slice(4)}`;
        console.log(celularFormatado);
    } else if (numero.length === 10) {
        celularFormatado = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(6)}`;
        console.log(celularFormatado);
    } else if (numero.length === 11) {
        celularFormatado = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 3)} ${numero.slice(3, 7)}-${numero.slice(7)}`;
        console.log(celularFormatado);
    } else {
        console.log('invalido')
    }
}

formatarCelular(celular)