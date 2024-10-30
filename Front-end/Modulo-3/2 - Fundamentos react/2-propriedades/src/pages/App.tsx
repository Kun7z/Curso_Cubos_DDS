import { Lista } from "../components/Lista"
import { Product } from "../components/Products"

function App() {
  const tecnologias = ['react', 'node', 'javascript']
  const frutas = ['maçã', 'banana', 'goiaba']
  return (
    <>
      <Lista title='Tecnologias' items={tecnologias} />
      <Lista title='Frutas' items={frutas} />
      <Lista items={frutas} />
      <Product>
        <h1>Produto 1</h1>
        <h2>R$ 1000,00</h2>
        <button>Comprar</button>
      </Product>
    </>
  )
}

export default App
