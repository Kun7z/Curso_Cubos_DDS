const botao = document.querySelector('.botao1')
const botao2 = document.querySelector('.botao2')

const mostrarBotaoFoiClicado = () => {
    console.log('Botão foi clicado')
    // É injetado esse texto, botão 1 foi clicado, no h1 do meu html, através da seleção em document.querySelector, mas apenas quando for clicado, pois está dentro da função callback da EventListener.
    const elementoh1 = document.querySelector('h1')
    elementoh1.textContent = 'Botão foi clicado'
}
// Evento de escuta addEventListener
botao.addEventListener('click', mostrarBotaoFoiClicado)
botao2.addEventListener('click', mostrarBotaoFoiClicado)