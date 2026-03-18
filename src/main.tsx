import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { MovieProvider } from './contexts/MoviesContexts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance='dark'>
      <MovieProvider>
        <App/>
      </MovieProvider>
    </Theme>
  </StrictMode>
)