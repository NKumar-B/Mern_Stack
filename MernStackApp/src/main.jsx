import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JSX from './App.jsx'
import MernHistory from './MernHistory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX />
    <MernHistory />
  </StrictMode>,
)
