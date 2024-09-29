const clicouPai = () => {
    console.log('clicou pai')
}

const clicouFilho = (event) => {
    console.log('clicou filho')
    event.stopPropagation();  //para propragação
}