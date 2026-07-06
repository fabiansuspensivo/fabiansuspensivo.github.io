import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { textos, type Idioma, type Textos } from './textos'

const LLAVE = 'idioma'

// deteccion automatica: preferencia guardada > idiomas del navegador > es
export function detectarIdioma(): Idioma {
  const guardado = localStorage.getItem(LLAVE)
  if (guardado === 'es' || guardado === 'ca' || guardado === 'de') {
    return guardado
  }
  for (const lang of navigator.languages ?? [navigator.language]) {
    const base = lang.toLowerCase().split('-')[0]
    if (base === 'ca' || base === 'de' || base === 'es') return base
  }
  return 'es'
}

type ContextoIdioma = {
  idioma: Idioma
  t: Textos
  cambiarIdioma: (idioma: Idioma) => void
}

const Contexto = createContext<ContextoIdioma | null>(null)

export function ProveedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(detectarIdioma)

  const cambiarIdioma = useCallback((nuevo: Idioma) => {
    localStorage.setItem(LLAVE, nuevo)
    setIdioma(nuevo)
  }, [])

  useEffect(() => {
    const t = textos[idioma]
    document.documentElement.lang = idioma
    document.title = t.meta.titulo
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.descripcion)
  }, [idioma])

  return (
    <Contexto.Provider value={{ idioma, t: textos[idioma], cambiarIdioma }}>
      {children}
    </Contexto.Provider>
  )
}

export function useIdioma(): ContextoIdioma {
  const ctx = useContext(Contexto)
  if (!ctx) throw new Error('useIdioma fuera del ProveedorIdioma')
  return ctx
}
