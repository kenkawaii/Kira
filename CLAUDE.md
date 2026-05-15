# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Run production server on port 3000
npm run dev      # Run with nodemon (auto-restart on changes)
npm install      # Install dependencies
```

Access the app at `http://localhost:3000` after starting.

## Architecture

**Single-file backend:** All API logic lives in `server.js` — Express routes, SQLite setup, session auth, and middleware in one file (~260 lines).

**Static frontend:** All `.html` files are served directly from the root directory via `express.static`. No build step, no bundler — just HTML + Tailwind CDN + vanilla JS.

**Database:** SQLite (`kira.db`) auto-created on first run with 3 tables:
- `waitlist` — email signups: `email`, `businessName`, `businessType`, `interview` (0/1), `joinedAt`, `status`
- `admin` — admin users (default: `admin` / `admin123`)
- `contacts` — contact form submissions: `name`, `email`, `subject`, `message`, `createdAt`

**Auth:** Session-based (`express-session`). Admin routes check `req.session.admin`. Passwords hashed with bcryptjs.

## Public Pages

`index.html`, `how-it-works.html`, `features.html`, `comparison.html`, `faq.html`, `why.html`, `waitlist.html`, `contact.html`, `success.html`

## Key Files

- `server.js` — entire backend (routes, DB, auth)
- `admin-dashboard.html` — admin panel with tabs for waitlist/contacts/stats, auto-refreshes every 30s
- `waitlist.html` — public signup form (POSTs to `/api/waitlist`)
- `contact.html` — contact form (POSTs to `/api/contact`)
- `admin.html` — admin login page

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
