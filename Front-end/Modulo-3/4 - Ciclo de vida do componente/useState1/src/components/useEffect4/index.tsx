import { useEffect, useState } from "react"


const App4 = (): JSX.Element => {
    const [mostrar, setMostrar] = useState<boolean>(false)

    useEffect(() => {
        return () => {
            console.log('Executo quando o componente é removido ou renderizado com alteração nas dependencias')
        }
    })
    return (
        <>
            {mostrar ? <Notificacao /> : null}
            <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Remover' : 'Adicionar'}</button>
        </>
    )
}

const Notificacao = (): JSX.Element => {
    return <h1>Notificacao</h1>
}

export default App4