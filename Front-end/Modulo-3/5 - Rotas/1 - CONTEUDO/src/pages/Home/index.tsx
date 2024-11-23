import styles from './home.module.css'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { IDataTransaction, ITransaction, ITransactionInput } from '../../interfaces/homeInterface'
import transactionsApi from '../../services/transactionsApi'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'



const schema = yup
  .object({
    description: yup.string().required('A descrição é obrigatória'),
    price: yup.number()
      .transform((value) => Number.isNaN(value) ? null : value)
      .required('o preço é obrigatório')
  })
  .required()

export function Home() {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<ITransaction[]>([])
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    loadTransactions()
    console.log(params)
    if (!params.id) return
    const newFilteredTransactions = transactions
      .filter(item => item.id === params.id)
    setFilteredTransactions(newFilteredTransactions)
  }, [params])



  async function loadTransactions() {
    try {
      const { data }: IDataTransaction = await transactionsApi.get('/transactions')
      if (data) {
        setTransactions(data)
      }
    } catch (err) {
      alert('Ocorreu um erro')
    }
  }


  function formatedPrice(price: number) {
    //const options = { style: 'currency', currency: 'BRL' }
    return new Intl.NumberFormat('pt-BR').format(price)
  }

  async function addTransaction(inputsValue: ITransactionInput) {
    try {
      const { data } = await transactionsApi.post('/transactions', {
        id: crypto.randomUUID(),
        description: inputsValue.description,
        price: inputsValue.price,
      })

      if (data) {

        setTransactions(prevTransactions => [...prevTransactions, data])
      }

    } catch (err) {
      alert('Ocorreu um erro')
    }
  }

  return (
    <div className={styles.container__home}>

      <div className={styles.content__home}>

        <form onSubmit={handleSubmit(addTransaction)}>
          <h2>Contas</h2>
          <input {...register('description')} type="text" placeholder="Conta" />
          <p>{errors.description?.message}</p>
          <input {...register('price')} type="number" placeholder="Preço R$" />
          <p>{errors.price?.message}</p>
          <button className={`btn btn__positive ${styles.btn__register}`}>CADASTRAR</button>

        </form>
        {filteredTransactions.length > 0 ?
          <ul className={styles.transactions}>
            {filteredTransactions.map(item =>
              <li key={item.id}>
                {item.id} - {item.description} - {formatedPrice(item.price)}

              </li>
            )}
          </ul>
          :
          <ul className={styles.transactions}>
            {transactions.map(item =>
              <li key={item.id}>
                {item.description} - {formatedPrice(item.price)}
                <NavLink
                  style={{ float: 'right' }}
                  to={`/home/${item.id}`}>
                  Detalhamento
                </NavLink>
              </li>
            )}
          </ul>}
      </div>
    </div >
  )
}