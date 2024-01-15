/*

Na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à vista.

Caso queira parcelar, a loja parcela em até 6x sem juros, mas sem desconto.

Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor da parcela.

*/


//minha resolução.

const parcelas = 6;
const preco = 1000;
const desconto_analise = parcelas == 1 ? desconto = 0.1 : desconto = 0;
var desconto;
const unidade = parcelas == 1 ? "parcela" : "parcelas";
const preco_real = desconto == 0.1 ? preco - (preco * desconto) : preco;
console.log(preco_real);



console.log(`Você vai pagar em ${parcelas} ${unidade}. Portanto terá ${desconto_analise * 100} % de desconto. Logo, seu produto custará ${preco_real}. `)


//resolucao professor

const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    //à vista com desconto de 10%
    const desconto = valorDaCompra * 10 / 100;
    const ValorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${ValorAPagar}, pois à vista possui 10% de desconto.`)
} else {
    //Parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$${valorDaParcela.toFixed(2)}`)
}



