# Local Drone Guy — 3D Interactive Website Design

## Research Summary

### CodeZenith.AI
- **Public website repo** (`codezenith/codezenith-website`) is a 6-year-old Angular 9 + Bootstrap/BLK Design System consulting site — no current 3D.
- **Public 3D tutorial source** (`MiladiCode/3D-portfolio-website`) is the actual code behind the CodeZenith YouTube tutorial *“Build a Stunning 3D Website with HTML, CSS & Spline”*.
- **Technique**: static HTML/CSS/JS + embedded `<spline-viewer>` scenes hosted at `prod.spline.design/…scene.splinecode`, AOS scroll-reveal animations, CSS spotlight hover effect, gradient text, bento-grid cards, auto-scrolling video slider, EmailJS form.

### Emergent Labs
- **Public repo** (`gsivak487/emrgent_labs`) is a React/Shadcn UI CRUD boilerplate — no 3D.
- **Published tutorial** on emergent.sh teaches exactly the same approach: **Spline for 3D scene creation + scroll/hover interactivity + publish/deploy**.
- **Technique**: use Spline as the 3D editor, export a `.splinecode` URL or runtime, embed with `@splinetool/viewer`, and layer HTML/CSS/JS animations on top.

## Merged Approach (Private Tool)

We will build a **single-file + asset upgrade** to the existing Local Drone Guy static landing page:
1. **Keep the current HTML structure and Netlify form** so the SPEC remains valid and content is unchanged.
2. **Add a cinematic 3D hero layer** using an embedded Spline drone scene (or a fallback custom Three.js/WebGL “drone flight path” canvas if Spline is blocked).
3. **Add the CodeZenith techniques**:
   - `spline-viewer` full-screen interactive background for the hero.
   - AOS scroll-reveal for sections.
   - Gradient text on the hero headline.
   - CSS spotlight hover on service/pricing cards.
   - Auto-scroll video/image gallery slider.
4. **Add Emergent Labs techniques** from their tutorial:
   - Scroll-triggered animations.
   - Mouse-hover interaction state passed into the 3D container.
   - Publish/deploy on Netlify (unchanged).
5. **No build step** — still pure HTML/CSS/JS, keeping the project deployable to Netlify exactly as before.

## Asset Strategy
- The existing hero is a PNG photo (`images/hero.png`). We will overlay the 3D scene with a subtle gradient so it feels integrated, not replaced.
- The gallery becomes a horizontal auto-scroll strip (CodeZenith video-slider pattern) using the existing 6 gallery images.
- The 3D Spline asset will be a hosted drone scene. We will use a **public Spline URL as a placeholder** and note that a custom model can replace it.

## Implementation Plan
- `index.html` — add Spline viewer, AOS, section IDs, gallery slider markup, card spotlight JS.
- `styles.css` — add dark-cinematic variant classes, gradient text, spotlight hover, auto-scroll slider, mobile overrides.
- `script.js` — AOS init, spotlight mouse tracking, gallery slider pause/hover, Spline fallback for low-power devices.
- `netlify.toml` — unchanged.
- `README.md` — update with 3D stack notes and Spline URL customization instructions.

## Blockers / Decisions Needed
1. **Spline asset**: We need a hosted `.splinecode` URL. I can use a free public drone/planet placeholder URL, but a real branded drone model needs to be created in Spline or Blender and exported. **I can generate the site code and a placeholder URL; the user will need to replace the URL with their own scene**.
2. **Performance**: Spline viewer adds ~200-500 KB. On mobile we should lazy-load or disable it. **We will lazy-load the viewer and provide a CSS fallback**.
3. **No actual 3D model creation tool**: I cannot create a `.splinecode` file directly because it requires the Spline editor or a GLB/GLTF conversion. **I can build the integration and a custom Three.js canvas fallback that draws a stylized drone + particle field** so the site is fully functional without Spline.
4. **EmailJS**: CodeZenith's example uses EmailJS with a public key. The Local Drone Guy form uses Netlify Forms, which is better for this use case. **We keep Netlify Forms**.

## Recommended Build
Create a hybrid: the site loads the Spline viewer if a URL is configured, otherwise falls back to a lightweight WebGL/Three.js canvas with a procedural drone animation and floating particles. This makes it a real “private tool” merging both CodeZenith (Spline) and Emergent (Three.js/WebGL) techniques.
