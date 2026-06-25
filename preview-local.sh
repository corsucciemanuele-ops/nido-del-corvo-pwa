#!/bin/bash
# preview-local.sh — avvia la preview locale di Nido del Corvo PWA
set -e

echo ""
echo "  Nido del Corvo — Dev server locale"
echo "  ────────────────────────────────────"

# installa dipendenze se node_modules manca
if [ ! -d "node_modules" ]; then
  echo "  → Installazione dipendenze..."
  npm install
fi

echo ""
echo "  ✓ Dev server su: http://localhost:5173"
echo "  In caso di pagina bianca, apri la Console del browser (F12)"
echo "  per vedere l'errore esatto."
echo "  Premi Ctrl+C per fermare."
echo ""

# apri il browser dopo 2 secondi (solo macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
  (sleep 2 && open "http://localhost:5173") &
fi

npx vite --host 0.0.0.0 --port 5173
