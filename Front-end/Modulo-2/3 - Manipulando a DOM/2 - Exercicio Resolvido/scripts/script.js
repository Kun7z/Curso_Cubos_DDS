//boa dica é que essa parte de procurar um seletor dentro do HTML, é que seja feito uma vez, assim ele só carrega a primeira vez e depois o "sistema" já sabe onde encontrar esses elementos, se botar dentro de uma função, toda vez que aquela função for realizada, vai ser rodado a função do DOM procurando o seletor no html.
const inputCadastrar = document.querySelector('input')
const botaoCadastrar = document.querySelector('button')
const ul = document.querySelector('ul')

const injetaLinha = () => {
    //verificando se foi enviado algum valor no input
    if (inputCadastrar.value.length <= 0) {
        inputCadastrar.classList.add('borda-vermelha');
        return;
    }

    //criar uma li
    const novaLi = document.createElement('li');

    //cria o botão que vai ficar no lado da linha para excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = ' Excluir '

    //evento para remoção da linha com click
    botaoExcluir.addEventListener('click', () => {
        novaLi.remove()
    })

    //cria o span que vai conter o texto do input
    const elementoSpan = document.createElement('span');
    elementoSpan.textContent = inputCadastrar.value

    //injeta elementos
    novaLi.append(elementoSpan)
    novaLi.append(botaoExcluir)


    //cria evento possível de realizar na li, que no caso é poder riscar ela da lista
    novaLi.addEventListener('click', (event) => {
        const elementoLi = event.target;  //pega o evento, no caso como o evento é um click na linha, ele pega a linha.
        elementoLi.classList.toggle('comprado')  //Se a classe já fosse criada, ele excluiria, se a classe não existisse, ele cria
    })

    //injeta linha no html
    ul.appendChild(novaLi)

    //tira o texto após cadastrar
    inputCadastrar.value = "";
}

botaoCadastrar.addEventListener('click', injetaLinha)