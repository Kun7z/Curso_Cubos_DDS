const verKeyPress = () => {
    console.log('tecla está pressionada')
}
// na keyDown, o valor que é coletado no .value, sempre é o último valor pressionado.
const verKeyDown = () => {
    console.log('tecla é pressionada')
}
//no keyUp, o valor que é coletado no .value, sempre é o valor atual.
const verKeyUp = () => {
    console.log('tecla foi solta ou retorna à posição original')
}

const elemento = document.querySelector('input')
//adicionando em função através de um eventListener
elemento.addEventListener('keyup', verKeyUp)