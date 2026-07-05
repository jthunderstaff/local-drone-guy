# Local Drone Guy

A static landing page for **Local Drone Guy**, a drone photography and videography service for live events.

## Live Site

- Production URL: `https://localdroneguy.netlify.app` (initial)
- Custom domain: `localdroneguy.com` (future)

## Project Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `styles.css` | All styles, responsive design |
| `script.js` | Mobile nav, smooth scroll, dynamic year |
| `thank-you.html` | Form success page |
| `netlify.toml` | Netlify deploy config |
| `SPEC.md` | Full design and content specification |

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

Built from the `netlify-landing-page-deploy` skill workflow.
