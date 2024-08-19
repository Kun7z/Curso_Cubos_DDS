const useState = <T>() => {
    let state: T

    const getState = (): T => {
        return state
    }

    const setState = (newState: T) => {
        state = newState
    }

    return { getState, setState }
}

const usuario = useState<string>()  //passando o dado entre chaves <string> para informar que será sempre utilizado string

usuario.setState('1231')

console.log(usuario.getState());

//usuario.setState(123)  //da erro por conta de que não é usado number nessa função.


const funcaoAleatoria = <T = string>(texto: T): T => { //dado generic que caso não informado será string
    return texto
}

const teste = funcaoAleatoria<number>(123) //determinando que irei utilizar o dado com tipo Number, porém se eu não passar, o dado será por padrão string

//-----------------------------------

type Pessoa = {
    id: number,
    nome: string
}

const useState2 = <T extends Pessoa>() => {
    let state: T

    const getState = (): T => {
        return state
    }

    const setState = (newState: T) => {
        state = newState
    }

    return { getState, setState }
}

const usuario2 = useState2<Pessoa>()  //generic que requer que a gente use um tipo como padrão de entrega de dados

usuario2.setState({ id: 2, nome: 'Eric' })  //caso for definido algo diferente disso, dará erro.



