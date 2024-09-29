const elementoButton = document.querySelector('button');

//event será sempre o primeiro parâmetro
const salvar = (event) => {
    const elementoInput = document.querySelector('input');
    console.log('clicou', elementoInput.value, event.target) //com esse console.log podemos ver o objeto event
    event.target.disabled = "disabled"  //desabilita o botão
    elementoButton.removeEventListener('click', salvar) //remove listener
}

elementoButton.addEventListener('click', salvar)