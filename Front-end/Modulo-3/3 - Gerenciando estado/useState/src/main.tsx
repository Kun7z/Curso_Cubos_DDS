import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/index'
import './css/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
