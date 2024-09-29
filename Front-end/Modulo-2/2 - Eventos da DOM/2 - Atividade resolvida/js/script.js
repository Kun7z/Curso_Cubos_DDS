const bolinhaElemento = document.querySelector('.bolinha')
let posicao = 0

const ganhou = () => {
    setTimeout(() => {
        alert('Parabéns, chegou')
        reiniciar()
    }, 500)
}

const perdeu = () => {
    setTimeout(() => {
        alert('Poxa, perdeu')
        reiniciar()
    }, 500)
}

const moverBolinha = (event) => {
    if (event.keyCode == 39) {
        posicao += 10
        bolinhaElemento.style.marginLeft = `${posicao}px`  //style MarginLeft aceita somente valores com 
        console.log("moverBolinha", bolinhaElemento, posicao)
        if (posicao == 400) {
            ganhou()
        }
    }
}

const reiniciar = () => {
    posicao = 0;
    bolinhaElemento.style.marginLeft = `${posicao}px`
}

const girar = () => {
    posicao += Math.random() * 400
    bolinhaElemento.style.marginLeft = `${posicao}px`
    if (posicao == 400) {
        ganhou()
    } else {
        perdeu()
    }
}
document.addEventListener('keydown', moverBolinha)