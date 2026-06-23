# Nido del Corvo — PWA

Vetrina digitale premium per il ristorante Nido del Corvo, Sassocorvaro Auditore (PU).

## Stack

| | |
|---|---|
| Build | Vite 8 |
| Framework | React 19 |
| Language | TypeScript 6 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| SEO | React Helmet Async |
| Validation | Zod |

## Avvio rapido

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri `http://localhost:5173`.

## Script disponibili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia dev server con HMR |
| `npm run build` | Build production in `dist/` |
| `npm run preview` | Preview build locale |
| `npm run lint` | Lint con oxlint |

## Struttura

```
src/
├── config/         # Links, colori, contatti, metadata, media — MODIFICARE QUI
├── components/
│   ├── layout/     # Header, Footer, Navigation, Layout
│   ├── sections/   # Hero, Esperienza, Cucina, FishDay, Accedi, Eventi, Gallery, Contatti
│   ├── common/     # Button, Card, Image, Section, Badge, Icon, Heading, Text
│   └── utils/      # Hooks e helpers
├── pages/          # Home, NotFound
├── styles/         # globals.css, animations.css, print.css
├── auth/           # STUB Fase 2 — auth logic
├── user/           # STUB Fase 2 — user profile
├── fidelity/       # STUB Fase 2 — loyalty system
├── tickets/        # STUB Fase 2 — event tickets
├── notifications/  # STUB Fase 2 — push notifications
└── crm/            # STUB Fase 2 — CRM integration
```

## Configurazione links

Tutti gli URL esterni sono centralizzati in `src/config/links.ts`.
Cambiare un link = aggiornare un solo file.

```ts
export const LINKS = {
  MENU_URL: "https://nidodelcorvo.it/menu",
  BOOKING_URL: "https://colle-eventi.netlify.app/",
  EVENT_REQUEST_URL: "https://colle-eventi.netlify.app/",
  WHATSAPP: "https://wa.me/393388638823",
  // ...
};
```

## Media placeholder

I media placeholder si trovano in `src/assets/placeholder/`.
Vedere `src/assets/placeholder/README.md` per le specifiche di sostituzione.

## Roadmap

| Fase | Contenuto | Status |
|---|---|---|
| **Fase 1** | Setup, struttura, config, stub Fase 2 | Completata |
| **Fase 2** | Layout, Header, Footer, componenti atomic | Prossima |
| **Fase 3** | Hero, sezioni homepage, animazioni | In arrivo |
| **Fase 4** | Gallery, Contatti, SwiperJS lightbox | In arrivo |
| **Fase 5** | SEO, PWA manifest, Lighthouse audit | In arrivo |
| **Fase 6** | Deploy Netlify, test mobile, smoke test | In arrivo |

## Predisposizione Fase 2 (IL COLLE OS)

La struttura è predisposta per l'integrazione futura con Supabase:

- Stub folders `auth/`, `user/`, `fidelity/`, `tickets/`, `notifications/`, `crm/`
- TypeScript types definiti
- Hook stubs (useAuth, useProfile, useFidelity, useTickets, usePushNotifications, useCRM)
- Config Supabase stub in `src/config/supabase.ts`
- Environment variables predisposte in `.env.example`

**Fase 1:** Zero auth, zero data collection, zero connessione Supabase.
**Fase 2+:** Uncomment client Supabase, implementare hook stubs, aggiungere UI.

## Deploy Netlify

```bash
npm run build
# Publish directory: dist
# Build command: npm run build
```

Impostare le environment variables su Netlify dashboard prima del deploy.

---

**Parte del progetto IL COLLE** — Nido del Corvo · The Pincio · IL COLLE OS
