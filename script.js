document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Smooth scroll for anchor links (fallback for browsers without CSS smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


// --- 3D hero: Spline viewer loaded state + fallback canvas ---
(() => {
  const viewer = document.getElementById('heroSpline');
  const canvas = document.getElementById('heroCanvas');

  if (viewer) {
    viewer.addEventListener('load', () => viewer.classList.add('loaded'));
    // If Spline doesn't load within 5s, keep canvas visible
    setTimeout(() => {
      if (!viewer.classList.contains('loaded')) {
        viewer.style.display = 'none';
      }
    }, 5000);
  }

  // Lightweight WebGL fallback: particle field + floating drone silhouette
  if (canvas && canvas.getContext) {
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) initDroneCanvas(canvas);
  }

  function initDroneCanvas(c) {
    const ctx = c.getContext('2d');
    let w, h, particles = [], drone = { x: 0, y: 0, t: 0 };

    function resize() {
      w = c.width = c.parentElement ? c.parentElement.clientWidth : window.innerWidth;
      h = c.height = c.parentElement ? c.parentElement.clientHeight : window.innerHeight;
      particles = [];
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          a: Math.random() * 0.5 + 0.2
        });
      }
    }

    function drawDrone(x, y, scale) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#0ea5e9';
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      // central body
      ctx.ellipse(0, 0, 16, 8, 0, 0, Math.PI * 2);
      ctx.stroke();
      // four arms + rotors
      for (const [dx, dy] of [[-22, -14], [22, -14], [-22, 14], [22, 14]]) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(dx, dy);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(dx, dy, 8, 3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.a})`;
        ctx.fill();
      }
      // drone orbit
      drone.t += 0.008;
      drone.x = w / 2 + Math.cos(drone.t) * (w * 0.28);
      drone.y = h / 2 + Math.sin(drone.t * 1.3) * (h * 0.18);
      drawDrone(drone.x, drone.y, 1.2 + Math.sin(drone.t * 2) * 0.2);
      requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize);
    animate();
  }
})();

// --- Spotlight hover effect on cards ---
document.querySelectorAll('.service-card, .pricing-card, .step, .testimonial').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});

// --- Gallery slider: pause on hover is handled in CSS ---
