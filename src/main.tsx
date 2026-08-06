import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import '@fontsource-variable/archivo'
import './styles/global.css'
import { ProveedorIdioma } from './i18n/idioma'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProveedorIdioma>
      <App />
      <Analytics />
    </ProveedorIdioma>
  </StrictMode>,
)
