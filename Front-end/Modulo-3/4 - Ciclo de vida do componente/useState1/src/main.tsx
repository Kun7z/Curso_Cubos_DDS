import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App3 from './components/useEffect3'
import App4 from './components/useEffect4'
// import UseEffect1 from './components/useEffect1'
// import App2 from './components/useEffect2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <UseEffect1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </StrictMode>,
)
