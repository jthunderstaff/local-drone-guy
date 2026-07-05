# Local Drone Guy — Website Specification

## 1. Project Overview

**Name:** Local Drone Guy
**Tagline:** "Live Events from Every Angle"
**Business:** On-demand drone photography & videography for live functions and events.
**Domain target:** `localdroneguy.com` (or `localdroneguy.netlify.app` for initial deploy)
**Type:** Static landing page (HTML/CSS/JS), Netlify-hosted

## 2. Audience & Goals

### Primary audiences
- Event coordinators / planners
- Wedding planners & couples
- Real estate agents (open houses, property tours)
- Sports tournament organizers
- Festival / concert promoters
- Local businesses hosting grand openings or PR events

### Site goals
1. Communicate services clearly within 5 seconds
2. Build trust (licensed pilot, insurance, example work)
3. Capture leads via contact form
4. Drive phone/email booking

## 3. Brand Direction

**Tone:** Friendly, professional, local, reliable, exciting
**Color palette:**
- Primary: Sky blue `#0EA5E9`
- Secondary: Sunset orange `#F97316`
- Accent: Cloud white `#F8FAFC`
- Dark: Slate `#0F172A`
- Success/CTA: Lime green `#22C55E`

**Typography:**
- Headings: Inter (Google Fonts)
- Body: Inter

**Imagery:**
- Hero: Aerial drone shot of an outdoor live event (festival, wedding, or sports field)
- Section images: Drone in flight, event aerials, operator with controller, before/after perspectives
- All images real or high-quality stock / AI-generated

**Logo concept:**
- Simple drone silhouette + location pin or compass
- Text mark: "Local Drone Guy" with small drone icon above or beside

## 4. Site Structure

### Section-by-section

#### 4.1 Navigation (sticky)
- Logo left
- Links: Services, How It Works, Gallery, Pricing, Contact
- CTA button: "Book a Flight"

#### 4.2 Hero
- Headline: "Live Events from Every Angle"
- Subheadline: "Professional drone photography and videography for weddings, festivals, sports, real estate, and corporate events. Licensed. Insured. Local."
- Primary CTA: "Get a Free Quote"
- Secondary CTA: "See Our Work"
- Background: Full-width aerial event photo/video with subtle overlay

#### 4.3 Trust Bar
- 3-4 micro-badges/icons:
  - FAA Part 107 Licensed
  - Fully Insured
  - 4K/6K Video
  - Same-Day Editing Available

#### 4.4 Services
Cards for:
- **Weddings** — ceremony, reception, couple portraits from above
- **Live Events & Festivals** — crowd shots, stage reveals, recap videos
- **Sports** — tournaments, races, team highlights
- **Real Estate** — property tours, open houses, construction progress
- **Corporate & PR** — grand openings, ribbon cuttings, brand activations

Each card: icon, title, 1-2 sentence description, "Learn more" link to contact

#### 4.5 How It Works
3 steps:
1. **Book a Consultation** — tell us about your event
2. **We Plan the Flight** — location scout, permits, safety checklist
3. **You Get Stunning Footage** — raw, edited, and ready to share

#### 4.6 Demo Reel / Gallery
- Embedded video placeholder (YouTube/Vimeo) OR
- 6-8 image grid of aerial event shots
- CTA: "Want this for your event?"

#### 4.7 Pricing (transparent tiers)
- **Essential Flight** — $299 — 1 hour, 10 edited photos, 1 short video clip
- **Event Package** — $599 — 3 hours, 25 edited photos, 2-3 min highlight video
- **Premium Production** — $1,199 — Full-day coverage, 50+ photos, 5 min cinematic video, same-day social clips
- Custom quote link for large or multi-day events

#### 4.8 Testimonials
3 quotes with names/event types:
- Wedding couple
- Festival organizer
- Real estate agent

#### 4.9 Service Area
- Map or list of served cities/regions
- Text: "Serving [Region/State]. Available for travel."

#### 4.10 FAQ (accordion)
- Do you have a drone license?
- What happens if weather is bad?
- How far in advance should I book?
- Can you fly indoors?
- What deliverables do I get?

#### 4.11 Contact / Booking Form
Fields:
- Name
- Email
- Phone
- Event date
- Event type (dropdown)
- Location
- Message
- Submit: "Request a Quote"
- Netlify Forms integration (`netlify` attribute, honeypot)

Also display:
- Phone number (placeholder)
- Email (placeholder)
- Social links (placeholder)

#### 4.12 Footer
- Logo
- Quick links
- Contact info
- Social icons
- Copyright

## 5. Technical Requirements

- Static HTML/CSS/JS (no build step)
- Responsive (mobile-first)
- Netlify Forms for quote requests
- `netlify.toml` for deploy config
- `.gitignore` for OS files
- SEO basics: title, meta description, viewport, Open Graph
- Performance: lazy-load images, minimal JS

## 6. Deliverables

1. `index.html` — complete landing page
2. `styles.css` — all styles
3. `script.js` — minimal interactions (mobile nav, FAQ accordion)
4. `thank-you.html` — form success page
5. `netlify.toml` — deploy config
6. `README.md` — project overview + deploy instructions
7. `SPEC.md` — this document

## 7. Open Questions

- What region/city should be highlighted in service area?
- Do you have real footage/photos, or should we use placeholders/stock?
- Preferred contact phone/email?
- Should booking require deposit/payment integration?

## 8. Success Criteria

- Page scores 90+ on Lighthouse Performance
- Form submits successfully to Netlify
- Looks great on mobile and desktop
- Deploys to Netlify with custom domain ready
