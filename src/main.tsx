import { StrictMode } from 'react'
import '@fontsource-variable/archivo'
import './styles/global.css'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import { ProveedorIdioma } from './i18n/idioma'
import App from './App'

// vite-react-ssg pre-renderiza este arbol a HTML durante el build (para que
// buscadores y redes lean el contenido real) y lo hidrata en el navegador,
// donde la pagina sigue funcionando igual que siempre.
export const createRoot = ViteReactSSG(
  <StrictMode>
    <ProveedorIdioma>
      <App />
    </ProveedorIdioma>
  </StrictMode>,
)
