import styles from './signUp.module.css'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IInputsValue } from '../../interfaces/signUpInterface'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().required('O email é obrigatório').email('Email invalido'),
  password: yup.string().required('A senha é obrigatória').min(8, 'A senha precisa ter pelo menos 8 caracteres'),
}).required()


export function SignUp() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleFormSignUp = async ({ name, email, password }: IInputsValue) => {
    try {
      const { data } = await api.post('/usuarios', {
        nome: name,
        email,
        senha: password
      })
      console.log(data)
      if (data) {
        alert('Cadastrado com sucesso')
        navigate('/signin')
      }
    } catch (error) {
      alert('Ocorreu um erro')
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}>
        <form onSubmit={handleSubmit(handleFormSignUp)} className={styles.containerLeft__form}>

          <h2 className={styles.containerLeft__title}>Cadastre-se</h2>

          <input {...register('name')} type="text" placeholder="Nome" />
          <p>{errors.name?.message}</p>
          <input {...register('email')} type="text" placeholder="Email" />
          <p>{errors.email?.message}</p>
          <input {...register('password')} type="password" placeholder="Senha" />
          <p>{errors.password?.message}</p>

          <button className={`btn btn__positive ${styles.btn__register}`}>CADASTRAR</button>

        </form>

        <div className={styles.login__link}>
          <span>Já tem cadastro?</span>
          <a href="#" className={styles.login__link__text}>Clique aqui!</a>
        </div>
      </div>
      <div className={styles.containerRight}>
      </div>
    </main>

  )
}
