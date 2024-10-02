const toDos = fetch('https://jsonplaceholder.typicode.com/todos')  //promise

//GET REQUEST

//com o .then, conseguimos fazer com que caso o "contrato" da nossa promessa seja Resolve, vai nos responder os dados
toDos.then((response) => {

    console.log(response)  //ver os atributos da resposta

    return response.json()   //PROMISE que transforma a resposta em uma leitura JSON, mas não em JSON, para transformar em JSON teria de ser JSON.parse()

}).then((responseFormatada) => {  //.then para resolver a promessa do .json()

    console.log(responseFormatada) //recebe os dados em um array

    //fiiltra o array de 200 itens para 10
    const dezTarefas = responseFormatada.filter((tarefa) => {
        return tarefa.id <= 10
    })
    gerarListaDeTarefas(dezTarefas)

})

const gerarListaDeTarefas = (dezTarefas) => {
    const ulElement = document.querySelector('ul')
    dezTarefas.forEach((tarefa) => {  //retorno cada 1 dos itens do array
        const li = document.createElement('li');
        li.textContent = tarefa.title;
        ulElement.appendChild(li)
    });

}
