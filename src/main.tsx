import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('[nido] main.tsx OK — React', React.version)

const rootEl = document.getElementById('root')
console.log('[nido] #root found:', !!rootEl)

createRoot(rootEl!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

console.log('[nido] render() called')

// Register service worker (production only)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js').catch(() => {})
}
