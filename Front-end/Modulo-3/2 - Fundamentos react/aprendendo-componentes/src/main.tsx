import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import { Lista } from './components/Lista.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Lista />
  </StrictMode>,
)
