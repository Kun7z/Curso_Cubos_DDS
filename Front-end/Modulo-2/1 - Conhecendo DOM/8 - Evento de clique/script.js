const elementoBotao = document.querySelector('.btn')
//onclick evento, executa uma função ao realizar um click
elementoBotao.onclick = (event) => {  //event traz um PointerEvent
    console.log('btn foi clicado', event)
    const botao = event.target;
    if (botao.style.backgroundColor != 'red') {
        botao.style.backgroundColor = 'red';
        document.body.style.backgroundColor = 'blue';
    } else {
        botao.style.backgroundColor = 'rgb(240,240,240)'
        document.body.style.backgroundColor = '#fff'
    }
}