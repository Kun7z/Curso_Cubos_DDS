//saber se um e-mail é valido

//tem que ter pelo menos um @

//tem que ter pelo menos um ponto depois do @

const possivel_email = 'jose.messias@cubos.academy'

const indexArroba = possivel_email.indexOf('@');  //4

const indexPontoAposArroba = possivel_email.indexOf('.', indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log('Email atende as requisições')
} else {
    console.log('não há ponto após o arroba.')
}