import { useEffect, useState } from "react"

interface Tarefa {
    id: number
    title: string
    completed: boolean
}

const App2 = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    //Executa na primeira renderização, não importando se alterar o estado.
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
            setTarefas(data)
        }
        fetchData()
    }, [])


    return (
        <>
            <h1>Tarefas</h1>
            <ul>
                {tarefas.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </>
    )
}

export default App2