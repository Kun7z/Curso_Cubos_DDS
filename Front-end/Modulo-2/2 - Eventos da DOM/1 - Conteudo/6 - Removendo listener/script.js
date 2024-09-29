const clicar = () => {
    console.log('será q vai clicar')
    elementoButton.removeEventListener('click', clicar)  //Remove eventListener assim que for chamada essa função no eventlistener em baixo
}

const elementoButton = document.querySelector('button');  //seleciona elemento

elementoButton.addEventListener('click', clicar)  //eventListener