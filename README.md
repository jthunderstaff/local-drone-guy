# Local Drone Guy

A 3D interactive landing page for **Local Drone Guy**, a drone photography and videography service for live events.

## Live Site

- Production URL: `https://localdroneguy.netlify.app` (initial)
- Custom domain: `localdroneguy.com` (future)

## 3D Stack

This site merges the techniques from **CodeZenith.AI** (Spline 3D embed, AOS scroll reveal, gradient text, spotlight hover, auto-scroll gallery) and **Emergent Labs** (scroll-driven interactive 3D publishing, Spline web viewer deployment):

| Technique | Source | Implementation |
|-----------|--------|----------------|
| 3D hero background | CodeZenith / Spline | `<spline-viewer>` embed in `.hero-bg` with a fallback to a custom canvas drone animation |
| Scroll-triggered reveal | CodeZenith + Emergent | AOS library on hero, sections, gallery, and CTA |
| Gradient text | CodeZenith | CSS gradient on `.hero-content h1` |
| Spotlight card hover | CodeZenith | CSS radial gradient + JS mouse tracking on cards |
| Auto-scroll gallery | CodeZenith | CSS animation on `.slider .list .item` |
| Interactive 3D publishing | Emergent Labs | Spline viewer with `events-target="global"`; deploys as static HTML/JS via Netlify |

## Project Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with 3D hero + AOS markup |
| `styles.css` | All styles, 3D hero layer, slider, spotlight, responsive design |
| `script.js` | Mobile nav, smooth scroll, dynamic year, Spline load detection, canvas fallback, spotlight effect |
| `thank-you.html` | Form success page |
| `netlify.toml` | Netlify deploy config |
| `SPEC.md` | Full design and content specification |
| `3D_DESIGN.md` | Merged design plan and blocker notes |

## Customizing the 3D Scene

1. Create or open a scene in [Spline](https://spline.design/).
2. Export → **Web Content** → copy the hosted `.splinecode` URL.
3. Replace the `url` in `index.html`:

```html
<spline-viewer class="hero-spline" id="heroSpline" url="YOUR_SCENE_URL" loading="lazy" events-target="global"></spline-viewer>
```

If the URL is empty or Spline fails to load, the page automatically falls back to a lightweight procedural canvas animation.

## Form Handling

The quote request form uses Netlify Forms:

- `data-netlify="true"`
- Honeypot field: `netlify-honeypot="bot-field"`
- Hidden `form-name` input for JS-rendered detection
- Submits via POST to `/thank-you`

## Local Development

Serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushes to the `main` branch of `jthunderstaff/local-drone-guy` auto-deploy via Netlify.

---

Built from the `netlify-landing-page-deploy` skill workflow, upgraded with a custom 3D layer inspired by CodeZenith.AI and Emergent Labs.
