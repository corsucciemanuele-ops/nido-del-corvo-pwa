#!/bin/bash
# preview-local.sh — avvia la preview locale di Nido del Corvo PWA
set -e

echo ""
echo "  Nido del Corvo — Preview locale"
echo "  ────────────────────────────────"

# installa dipendenze se node_modules manca
if [ ! -d "node_modules" ]; then
  echo "  → Installazione dipendenze..."
  npm install --silent
fi

# build production
echo "  → Build production..."
npm run build --silent

# avvia preview e apri browser
echo ""
echo "  ✓ Preview disponibile su: http://localhost:4173"
echo "  Premi Ctrl+C per fermare."
echo ""

# apri il browser dopo 1 secondo (solo macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
  (sleep 1 && open "http://localhost:4173") &
fi

npm run preview -- --host 0.0.0.0 --port 4173
