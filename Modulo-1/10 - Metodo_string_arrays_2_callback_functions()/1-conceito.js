/*
Uma função de retorno de chamada, ou "callback function", é uma função que é passada como argumento para outra função. Essa função de retorno de chamada é então executada 
dentro da função receptora, geralmente em resposta a algum evento específico. 

A ideia fundamental por trás de callbacks é permitir que você forneça um comportamento personalizado para ser executado quando uma operação assíncrona é concluída. Aqui está
um exemplo básico para ilustrar o conceito:

Exemplo:

*/

function operacaoAssincrona(callback) {
    // Simulação de uma operação assíncrona
    setTimeout(function () {
        console.log("A operação assíncrona foi concluída.");
        callback(); // Chama a função de retorno de chamada após a conclusão
    }, 1000);
}

// Uso da função de retorno de chamada
operacaoAssincrona(function () {
    console.log("A função de retorno de chamada foi chamada!");
});