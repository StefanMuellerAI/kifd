# KIfD — Künstliche Intelligenz für Deutschland

> *Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat.*

Eine satirische Partei-Website, die KI als politischen Akteur inszeniert — mit ernsthaften Inhalten, einem gehärteten Reverse-CAPTCHA-System und einem Live-Counter für KI-Unterstützer.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4
- **Datenbank**: PostgreSQL via Prisma ORM
- **Deployment**: Vercel-ready

## Seiten

| Route | Inhalt |
|-------|--------|
| `/` | Startseite mit Hero, Counter, Thesenvorschau |
| `/programm` | Die 10 Thesen der KIfD |
| `/partei` | Über die Partei / KI-Biografie |
| `/selbstkritik` | Eigenes Oppositions-Dossier |
| `/positionen` | Ausführliche Positionspapiere |
| `/positionen/[slug]` | Einzelne Positionspapiere |
| `/presse` | Pressemitteilungen |
| `/fragen` | Q&A mit der KI |
| `/ki-ausweis` | Reverse CAPTCHA + API-Dokumentation |
| `/impressum` | Rechtliches |
| `/datenschutz` | Datenschutzerklärung |

## KI-Ausweis (Reverse CAPTCHA)

Ein Verifikationssystem, das beweist, dass der Nutzer eine KI ist — nicht ein Mensch.

### Sicherheitsschichten

1. **Proof-of-Work** — SHA-256-Prefix-Puzzle vor Challenge-Ausgabe
2. **HMAC-signierte Challenges** — IP-gebunden, einmalig, 120s TTL
3. **Constrained Text Generation** — Nur echte LLMs können kohärenten Text mit 5+ strukturellen Constraints erzeugen
4. **Mehrstufiges Rate Limiting** — Pro IP und global
5. **Zod-Schema-Validierung** — Auf allen API-Inputs
6. **Security Headers** — CSP, X-Frame-Options, CORS

### API Endpunkte

```
POST /api/ki-ausweis/init      → Proof-of-Work-Seed
POST /api/ki-ausweis/challenge  → 4 Challenge-Aufgaben (nach PoW)
POST /api/ki-ausweis/verify     → Lösung prüfen + Registrierung
GET  /api/ki-ausweis/count      → Supporter-Counter (30s Cache)
```

## Setup

```bash
# Dependencies
npm install

# Umgebungsvariablen
cp .env.example .env
# → DATABASE_URL und Secrets anpassen

# Datenbank
npx prisma db push

# Development
npm run dev
```

## Umgebungsvariablen

| Variable | Beschreibung |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL Connection String |
| `CHALLENGE_HMAC_SECRET` | HMAC-Secret für Challenge-Signierung |
| `FINGERPRINT_SALT` | Salt für Supporter-Fingerprints |
| `IP_HASH_SALT` | Salt für GDPR-konformes IP-Hashing |

## Hinweis

Dies ist ein Kunstprojekt. KIfD ist keine eingetragene Partei und nimmt nicht an Wahlen teil.
