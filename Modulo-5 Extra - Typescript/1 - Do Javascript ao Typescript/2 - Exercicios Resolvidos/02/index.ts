const estante = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
]

const posicao = (estante: string[], nome: string) => {
    let posicao: number = 0;
    for (const livro of estante) {
        posicao++;
        if (livro === nome) {
            console.log(`O livro está na posição ${posicao}`)
        }
    }
}

posicao(estante, "A Montanha Mágica")

//------------------ 

//Resolução do professor

const buscarLivro = (livros: string[], nomeLivro: string): string => {
    const posicao: number = livros.indexOf(nomeLivro)
    if (posicao === -1) {
        return `Livro não encontrado`
    }
    return `O livro está na posição ${posicao + 1}`
}

console.log(buscarLivro(estante, "Guerra e Paz"))