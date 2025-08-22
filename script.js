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

  if (!viewport || !controls) return;
  
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

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.toggle-btn');
  if (!btn) return;

  const container = btn.previousElementSibling;
  if (!container || !container.classList.contains('collapsible')) return;

  const collapsed = container.getAttribute('data-collapsed') === 'true';
  container.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
  btn.setAttribute('aria-expanded', collapsed ? 'true' : 'false');
  btn.textContent = collapsed ? 'Show less' : 'Read more';
});