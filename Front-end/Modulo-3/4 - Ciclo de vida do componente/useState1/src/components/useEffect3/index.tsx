import { useEffect, useState } from "react"

const App3 = () => {

    const [dependencia, setDependencia] = useState<boolean>(false)
    //Executa na primeira renderização e quando a dependencia é alterada, no caso a variável dentro dos colchetes []
    useEffect(() => {
        console.log('executa na primeira renderização');
        console.log('e quando a dependencia é alterada');

    }, [dependencia])  //array de dependencias, posso acabar criando mais dependencias, quando a dependencia for alterada, independente da quantidade vai ser carregado o useEffect


    return (
        <>
            <button onClick={() => setDependencia(!dependencia)}>Teste</button>
        </>
    )
}

export default App3