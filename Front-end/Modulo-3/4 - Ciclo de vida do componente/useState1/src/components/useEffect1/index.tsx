import { useEffect, useState } from "react"

const App = () => {
    const [nome, setNome] = useState<string>('Eric');
    //todas as Renderizações, UseEffect1, quando o componente é carregado na página
    useEffect(() => {
        console.log('Renderizou')
    })

    const mudarNome = () => {
        // Ele altera 1 única vez, porque quando o estado anterior for o mesmo que o atual, não se renderiza mais. Para renderizar toda vez um diferente, podemos usar a biblioteca Math do JS e um utilizar um Math.random() com um template string para ficar alterando toda vez o valor e renderizar a cada click.
        setNome('Eric Kuntz')
    }
    return (
        <>
            <h1>Olá</h1>
            <button onClick={mudarNome}>Clique</button>
        </>
    )
}

export default App