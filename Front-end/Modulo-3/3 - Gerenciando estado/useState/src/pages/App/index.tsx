import { useState } from 'react'
import { Lista } from '../../components/Lista'
import styles from './app.module.css'

function App() {
  let [movies, setMovies] = useState<string[]>(['Senhor dos Aneis', 'Harry potter'])  //<string[[]> generics

  const addMovie = () => {
    // const newMovie = [...movies, 'Divergente']
    // setMovies(newMovie)
    setMovies((filmesAnteriores: string[]) => {
      return [...filmesAnteriores, 'Divergentes']
    })
    return (
      <section className={styles.lista}>
        <h1 className={styles.title}>Filmes</h1>
        <Lista movies={movies} setMovies={setMovies} />
        <button onClick={addMovie}>Adicionar filme</button>
      </section>
    )
  }
}

export default App
