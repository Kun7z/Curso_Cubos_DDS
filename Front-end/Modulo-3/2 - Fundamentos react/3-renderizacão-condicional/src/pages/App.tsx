import { Lista } from "../components/Lista"
import { Product } from "../components/Products"

function App() {
  const tecnologias: string[] = ['react', 'node', 'javascript']
  const frutas: string[] = ['maçã', 'banana', 'goiaba']
  const produtoQSeraMostrado: number = 3;
  return (
    <>
      <Lista title='Tecnologias' items={tecnologias} />
      <Lista title='Frutas' items={frutas} />
      <Lista items={frutas} />

      {/* ternario */}
      {produtoQSeraMostrado == 1 ?
        <Product>
          <h1>Produto 1</h1>
          <h2>R$ 1000,00</h2>
          <button>Comprar</button>
        </Product>
        :
        <Product>
          <h1>Produto 2</h1>
          <h2>R$ 1000,00</h2>
          <button>Comprar</button>
        </Product>
      }

    </>
  )
}

export default App
