# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (run both in separate terminals)
npm run dev          # Express API on port 3000
npm run dev:client   # Vite dev server on port 5173

# Or run both together
npm run dev:all      # concurrently runs both dev servers

# Production
npm run build        # Build React app to dist/
npm start            # Serve everything from Express on port 3000
```

In development, open `http://localhost:5173`. Vite proxies `/api` to port 3000.  
In production, Express serves the `dist/` build and handles SPA routing.

## Architecture

**Backend:** `server.js` — Express REST API, SQLite, session auth (~260 lines). Serves `dist/` as static files in production with a catch-all for SPA routing.

**Frontend:** `client/` — Vite + React 18 + React Router 6 + Tailwind CSS 3 (installed via npm, not CDN). Build output goes to `dist/` in the root.

**Frontend structure:**
- `client/src/App.jsx` — route tree (React Router v6)
- `client/src/layouts/PublicLayout.jsx` — wraps public pages with Nav + Footer
- `client/src/components/` — `Nav`, `Footer`, `CTA`
- `client/src/pages/` — one file per page; admin pages in `pages/admin/`

**Database:** SQLite (`kira.db`) auto-created on first run with 3 tables:
- `waitlist` — email signups: `email`, `businessName`, `businessType`, `interview` (0/1), `joinedAt`, `status`
- `admin` — admin users (default: `admin` / `admin123`)
- `contacts` — contact form submissions: `name`, `email`, `subject`, `message`, `createdAt`

**Auth:** Session-based (`express-session`). Admin routes check `req.session.admin`. Passwords hashed with bcryptjs.

## Routes

| Path | Component |
|------|-----------|
| `/` | `pages/Home.jsx` |
| `/how-it-works` | `pages/HowItWorks.jsx` |
| `/features` | `pages/Features.jsx` |
| `/comparison` | `pages/Comparison.jsx` |
| `/faq` | `pages/FAQ.jsx` |
| `/why` | `pages/Why.jsx` |
| `/contact` | `pages/Contact.jsx` |
| `/waitlist` | `pages/Waitlist.jsx` (standalone, no layout) |
| `/success` | `pages/Success.jsx` (standalone) |
| `/admin` | `pages/admin/Login.jsx` (standalone) |
| `/admin/dashboard` | `pages/admin/Dashboard.jsx` (standalone, auto-refreshes every 30s) |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/waitlist` | Add to waitlist |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/admin/login` | Admin login |
| GET | `/api/admin/check` | Check auth status |
| POST | `/api/admin/logout` | Destroy session |
| GET | `/api/admin/waitlist` | Get all waitlist entries (auth required) |
| GET | `/api/admin/contacts` | Get all contact messages (auth required) |
| GET | `/api/admin/stats` | Get statistics: total, withInterview, byType (auth required) |
| DELETE | `/api/admin/waitlist/:id` | Delete entry (auth required) |

## Design System

- **Brand:** Predictive analytics SaaS for Malaysian F&B SMEs. Voice: confident, plain-spoken, friendly-professional (Linear/Stripe aesthetic — not playful startup, not enterprise heavy).
- **Primary colour:** Amber 700 `#B45309` (buttons, accents). Amber 600 `#D97706` (hover).
- **Neutrals:** Background `#FAFAF9`, Surface `#FFFFFF`, Border `#E7E5E4`, Text body `#44403C`, Text muted `#78716C`.
- **Typography:** Geist (headings 600, body 400). Monospace accents: JetBrains Mono — numbers, data labels only.
- **Components:** No gradients or shadows on buttons. Cards: white, 1px border, 12px radius. Inputs: 2px Amber 700 focus ring.
- **DO NOT:** use gradients on hero text, glassmorphism, parallax, autoplay video, stock businesspeople photos, or exclamation marks in copy.

## Deployment

Deployed on Railway. Push to `main` triggers auto-redeploy.

**Important:** SQLite on Railway uses an ephemeral filesystem — the database resets on redeploy. For persistent data, migrate to PostgreSQL.

**Environment variables on Railway:**
- `NODE_ENV=production`
- `EMAIL_USER` — Gmail address (optional, email currently disabled)
- `EMAIL_PASSWORD` — Gmail app password (optional)
