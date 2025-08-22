// Replace with your actual images (4 per portfolio)
const portfolios = {
  1: ['Images/portfolio 1/1.jpg','Images/portfolio 1/2.jpg','Images/portfolio 1/3.jpg','Images/portfolio 1/4.jpg'],
  2: ['Images/portfolio 2/1.jpg','Images/portfolio 2/2.jpg','Images/portfolio 2/3.jpg','Images/portfolio 2/4.jpg'],
  3: ['Images/portfolio 3/1.jpg','Images/portfolio 3/2.jpg','Images/portfolio 3/3.jpg','Images/portfolio 3/4.jpg'],
  4: ['Images/portfolio 4/1.jpg','Images/portfolio 4/2.jpg','Images/portfolio 4/3.jpg','Images/portfolio 4/4.jpg'],
  5: ['Images/portfolio 5/1.jpg','Images/portfolio 5/2.jpg','Images/portfolio 5/3.jpg','Images/portfolio 5/4.jpg'],
};

(function initPortfolioCarousel() {
  const viewport = document.getElementById('portfolioViewport');
  const controls = document.getElementById('portfolioControls');
  const hint = document.getElementById('portfolioHint');

  const INTERVAL_MS = 3000;
  let currentPortfolio = '1';
  let index = 0;
  let timer = null;
  let paused = false;

  function buildSlides(imgs) {
    viewport.innerHTML = '';
    imgs.slice(0, 4).forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'portfolio-slide' + (i === 0 ? ' active' : '');

      const card = document.createElement('div');
      card.className = 'portfolio-card';

      const inner = document.createElement('div');
      inner.className = 'portfolio-card-inner';

      const img = document.createElement('img');
      img.src = src;
      img.alt = `Portfolio ${currentPortfolio} image ${i + 1}`;
      img.loading = 'lazy';
      img.decoding = 'async';

      inner.appendChild(img);
      card.appendChild(inner);
      slide.appendChild(card);
      viewport.appendChild(slide);
    });
    index = 0;
  }

  function setActiveSlide(next) {
    const slides = Array.from(viewport.querySelectorAll('.portfolio-slide'));
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    slides[next % slides.length].classList.add('active');
    index = next % slides.length;
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      if (paused) return;
      setActiveSlide(index + 1);
    }, INTERVAL_MS);
  }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; }

  // Pause on hover
  viewport.addEventListener('mouseenter', () => { paused = true; });
  viewport.addEventListener('mouseleave', () => { paused = false; });

  // Pause when page hidden
  document.addEventListener('visibilitychange', () => {
    paused = document.hidden;
  });

  // Handle portfolio clicks
  controls.addEventListener('click', e => {
    const el = e.target.closest('.portfolio-control');
    if (!el) return;
    const id = el.dataset.id;
    if (!id || id === currentPortfolio) return;
    currentPortfolio = id;

    document.querySelectorAll('.portfolio-control')
      .forEach(c => c.classList.toggle('active', c.dataset.id === id));

    buildSlides(portfolios[id] || []);
    setActiveSlide(0);
    startTimer();
  });

  // Init
  buildSlides(portfolios[currentPortfolio] || []);
  startTimer();
})();


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: {
      el: document.getElementById('name'),
      errorEl: document.getElementById('nameError'),
      validate: (value) => value.trim().length > 0 || 'Please enter your name.'
    },
    email: {
      el: document.getElementById('email'),
      errorEl: document.getElementById('emailError'),
      validate: (value) => {
        if (value.trim().length === 0) return 'Please enter your email address.';
        // Simple email pattern; adjust if needed
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value) || 'Please enter a valid email address.';
      }
    },
    // Phone is optional; you can add pattern checks if you want
    message: {
      el: document.getElementById('message'),
      errorEl: document.getElementById('messageError'),
      validate: (value) => value.trim().length > 0 || 'Please enter a message.'
    }
  };

  // Utility to set error/valid states
  function setFieldState(el, errorEl, errorMsg) {
    if (errorMsg === true) {
      el.classList.remove('is-invalid');
      el.classList.add('is-valid');
      if (errorEl) errorEl.textContent = '';
      return true;
    } else {
      el.classList.remove('is-valid');
      el.classList.add('is-invalid');
      if (errorEl) errorEl.textContent = errorMsg;
      return false;
    }
  }

  // Validate a single field
  function validateField(key) {
    const { el, errorEl, validate } = fields[key];
    const result = validate(el.value);
    return setFieldState(el, errorEl, result);
  }

  // Validate on blur and input for responsive feedback
  Object.keys(fields).forEach((key) => {
    const { el } = fields[key];
    el.addEventListener('blur', () => validateField(key));
    el.addEventListener('input', () => {
      // Remove error as soon as it becomes valid
      const { el, errorEl, validate } = fields[key];
      const result = validate(el.value);
      if (result === true && el.classList.contains('is-invalid')) {
        setFieldState(el, errorEl, true);
      }
    });
  });

  // On submit, validate all required fields
  form.addEventListener('submit', (e) => {
    let isFormValid = true;

    Object.keys(fields).forEach((key) => {
      const valid = validateField(key);
      if (!valid) isFormValid = false;
    });

    if (!isFormValid) {
      e.preventDefault();
      // Focus first invalid field
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
    }
  });
});
