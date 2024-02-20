/*
Validação de e-mail
Faça um sistema que verifique se um e-mail é válido

Dicas:

Sempre tem que ter @
Sempre tem que ter pelo menos um . após o @.
Nunca pode começar com .
Nunca pode terminar com .


Entrada	Saída
jose@cubos.academy	        E-mail valido
jose@cubos.academy.br	    E-mail valido
jose.messias@cubos.academy	E-mail valido
jose.messias@cubos.io	    E-mail valido
jose@cubos	                E-mail invalido
jose.messias@cubos	        E-mail valido
jose.messias@.	            E-mail invalido
jose.@cubos	                E-mail valido
.@	                        E-mail invalido
@.	                        E-mail invalido
jose.messias@cubos.	        E-mail invalido
.messias@cubos.	            E-mail invalido
.messias@cubos	            E-mail invalido
*/

// MINHA RESOLUÇÃO

function solucao(email) {
    possivel_email = email.indexOf('@');  //encontra o index do @ no email, caso não tenha, retorna -1
    if (possivel_email != -1) {
        possivel_email_split = email.split('@') //separa o email, criando uma lista
    } else {
        return ('E-mail inválido')  //se não encontrar retorna a função e-mail inválido
    }
    let contaPontos_email = possivel_email_split[1].indexOf('.')  //encontra ponto após @
    let encontraPontoFinal = possivel_email_split[1].includes('.', possivel_email_split[1].length - 1);  // valor boolean se tem '.' após @ no fim
    let encontraPontoInicial = possivel_email_split[0].lastIndexOf('.', 0)  //encontra ponto no início da frase, se retornar -1, não tem, o que é pra acontecer se o email for valido.

    if (contaPontos_email != -1 && encontraPontoFinal == false && encontraPontoInicial == -1) {     //valida se tem ponto após @, valida se tem . após @ no fim e valida se tem ponto no inicio
        return ('E-mail valido')
    } else {
        return ('E-mail invalido')
    }

}

teste = solucao('jose@cubos.academy')
console.log(teste)

//RESOLUÇÃO DO PROFESSOR

const validarEmail = (email) => {
    let emailValido = true;

    if (email.indexOf('@') < 0) {
        emailValido = false;
    } else if (email.indexOf('.' < 0)) {
        emailValido = false;
    } else if (email.indexOf('.' === 0)) {
        emailValido = false;
    } else if (email.indexOf('.') === email.length - 1) {
        emailValido = false;
    }
}
