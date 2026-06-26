import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('[nido] main.tsx OK — React', React.version)

const rootEl = document.getElementById('root')
console.log('[nido] #root found:', !!rootEl)

// DEBUG: write a visible marker before React renders
// Se questo testo NON compare, il problema è nel caricamento del modulo JS
if (rootEl) {
  rootEl.innerHTML = '<p style="font-family:monospace;padding:20px;color:#666">[nido] JS caricato, React sta per montarsi...</p>'
}

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
