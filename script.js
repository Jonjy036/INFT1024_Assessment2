// Replace with your actual images (4 per portfolio)
const portfolios = {
  1: ['Images/portfolio 1/1.jpg','Images/portfolio 1/2.jpg','Images/portfolio 1/3.jpg','Images/portfolio 1/4.jpg'],
  2: ['Images/portfolio 2/1.jpg','Images/portfolio 2/2.jpg','Images/portfolio 2/3.jpg','Images/portfolio 2/4.jpg'],
  3: ['Images/portfolio 3/1.jpg','Images/portfolio 3/2.jpg','Images/portfolio 3/3.jpg','Images/portfolio 3/4.jpg'],
  4: ['Images/portfolio 4/1.jpg','Images/portfolio 4/2.jpg','Images/portfolio 4/3.jpg','Images/portfolio 4/4.jpg'],
  5: ['Images/portfolio 5/1.jpg','Images/portfolio 5/2.jpg','Images/portfolio 5/3.jpg','Images/portfolio 5/4.jpg'],
};
// Portfolio carousel logic
(function initPortfolioCarousel() {
  const viewport = document.getElementById('portfolioViewport');
  const controls = document.getElementById('portfolioControls');
  const hint = document.getElementById('portfolioHint');

  if (!viewport || !controls) return;
  
  const INTERVAL_MS = 3000; // 3 seconds
  let currentPortfolio = '1';
  let index = 0;
  let timer = null;
  let paused = false;
  // Build slides for selected portfolio
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
  // Set active slide by index
  function setActiveSlide(next) {
    const slides = Array.from(viewport.querySelectorAll('.portfolio-slide'));
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    slides[next % slides.length].classList.add('active');
    index = next % slides.length;
  }
  // Timer logic
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

  // Initial setup
  buildSlides(portfolios[currentPortfolio] || []);
  startTimer();
})();

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Contact form logic (only if the form exists on this page)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Stop the form from submitting

      // Clear previous error messages
      const nameErr = document.getElementById('nameError');
      const emailErr = document.getElementById('emailError');
      const phoneErr = document.getElementById('phoneError');
      const msgErr = document.getElementById('messageError');
      if (nameErr) nameErr.textContent = '';
      if (emailErr) emailErr.textContent = '';
      if (phoneErr) phoneErr.textContent = '';
      if (msgErr) msgErr.textContent = '';

      let valid = true;

      // Validate Name
      const nameEl = document.getElementById('name');
      const name = nameEl ? nameEl.value.trim() : '';
      if (name === '' && nameErr) {
        nameErr.textContent = 'Name is required.';
        valid = false;
      }

      // Validate Email
      const emailEl = document.getElementById('email');
      const email = emailEl ? emailEl.value.trim() : '';
      if (email === '' && emailErr) {
        emailErr.textContent = 'Email is required.';
        valid = false;
      } else if (email && !/^[^@]+@[^@]+\.[^@]+$/.test(email) && emailErr) {
        emailErr.textContent = 'Please enter a valid email address.';
        valid = false;
      }

      // Validate Message
      const messageEl = document.getElementById('message');
      const message = messageEl ? messageEl.value.trim() : '';
      if (message === '' && msgErr) {
        msgErr.textContent = 'Message is required.';
        valid = false;
      }

      // Optional: Validate Phone Number (basic check)
      const phoneEl = document.getElementById('phone');
      const phone = phoneEl ? phoneEl.value.trim() : '';
      if (phone && !/^[0-9+\s()-]{6,}$/.test(phone) && phoneErr) {
        phoneErr.textContent = 'Please enter a valid phone number.';
        valid = false;
      }

      // If all fields are valid, show a thank you message (since there's no backend)
      if (valid) {
        alert('Thank you for your message! (Form not actually sent.)');
        form.reset();
      }
    });

    // Privacy modal wiring (only if the elements exist)
    const openPrivacy = document.getElementById('open-privacy-modal');
    const closePrivacy = document.getElementById('close-privacy-modal');
    const privacyModal = document.getElementById('privacy-modal');

    if (openPrivacy && privacyModal) {
      openPrivacy.addEventListener('click', function (e) {
        e.preventDefault();
        privacyModal.style.display = 'flex';
      });
    }
    if (closePrivacy && privacyModal) {
      closePrivacy.addEventListener('click', function () {
        privacyModal.style.display = 'none';
      });
      privacyModal.addEventListener('click', function (e) {
        if (e.target === this) this.style.display = 'none';
      });
    }
  }

  // Collapsible news toggles (works on any page that has .collapsible)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;

    // The JS expects the button to be immediately after the collapsible block
    const container = btn.previousElementSibling;
    if (!container || !container.classList.contains('collapsible')) return;

    const collapsed = container.getAttribute('data-collapsed') === 'true';
    container.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
    btn.setAttribute('aria-expanded', collapsed ? 'true' : 'false');
    btn.textContent = collapsed ? 'Show less' : 'Read more';
  });
});