const entrar = (event) => {
    event.preventDefault()  //Event de reload da página, não acontece por conta do preventDefault, cancelando o padrão submit do button
    const emailElemento = document.querySelector('input[name="email"]')
    const senhaElemento = document.querySelector('input[name="senha"]')
    console.log(`email: ${emailElemento.value}, senha: ${senhaElemento.value}`)
}