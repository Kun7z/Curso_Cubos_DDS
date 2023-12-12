function verificar_maior_idade(idade) {
    if (idade > 17) {
        return true;
    } else {
        return false;
    }
}

const valor_retornado_pela_funcao = verificar_maior_idade(20)

console.log(valor_retornado_pela_funcao)