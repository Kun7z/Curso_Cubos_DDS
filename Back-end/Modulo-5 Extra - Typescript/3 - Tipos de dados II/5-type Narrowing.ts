const cadastro = (numero: string | number) => {
    if (typeof numero === 'string') {
        numero.toUpperCase();
    }
    if (typeof numero === 'number') {
        numero.toFixed(2);
    }
}

//narrowing=estreitando, afim de utilizar métodos diferentes baseado no tipo de dado enviado.