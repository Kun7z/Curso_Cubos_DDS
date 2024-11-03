import { Dispatch, SetStateAction } from 'react'
import styles from './lista.module.css'

interface ListaPropriedade {
    movies: string[],
    setMovies: Dispatch<SetStateAction<string[]>>
}
export const Lista = ({ movies, setMovies }: ListaPropriedade): JSX.Element => {


    //Função pra deletar o filme
    const deletarMovie = (movie: string) => {
        const newMovies = movies.filter(item => item !== movie) //Filtra a lista de filmes
        setMovies(newMovies) //Atualiza o estado do React para remover os filmes da página
    }

    //Cria a linha com o filme
    return (
        <ul className={styles.lista__container}>
            {movies.map(movie => <li key={movie} className={styles.lista__item}>{movie}<button onClick={() => deletarMovie(movie)}>Excluir</button></li>)}
        </ul>
    )
}


