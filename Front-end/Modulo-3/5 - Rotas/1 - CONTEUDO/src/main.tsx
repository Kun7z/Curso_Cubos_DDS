import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes'
// import { SignUp } from './pages/SignUp/index.tsx'
// // import { SignIn } from './pages/SignIn/index.tsx'
// // import { Home } from './pages/Home/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Componentes abaixo */}
    {/* <SignIn /> */}
    {/* <SignUp /> */}
    {/* <Home /> */}
    <BrowserRouter>
      {/* MainRoutes é um componente que conterá todas as rotas compostas por cada componente em ./pages/ */}
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
