//POST

const cadastrar = (event) => {
    event.preventDefault()
    const inputElement = document.querySelector("[name='tarefa']")

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            completed: false,
            title: inputElement.value,
            userID: 1,
            id: 201
        }),
        headers: {
            'content-type': 'application/json'
        }
    })

}