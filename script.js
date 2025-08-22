<script>
  // Replace with your actual images (4 per portfolio)
  const portfolios = {
    1: ['Images/portfolio 1/alex-tyson-Y30Yt8NHtHQ-unsplash.jpg','Images/portfolio 1/jan-antonin-kolar-Cbil92G0-SE-unsplash.jpg','Images/portfolio 1/toa-heftiba-c1PnuUmNkt4-unsplash.jpg','Images/portfolio 1/vinicius-amnx-amano-ALpEkP29Eys-unsplash.jpg'],
    2: ['Images/portfolio 2/letizia-agosta-Ml-GpVBupgo-unsplash.jpg','/Images/portfolio 2/lisa-anna-FixDnZKv-5g-unsplash.jpg','Images/portfolio 2/louis-colbee-HC1K7e08He4-unsplash.jpg','Images/portfolio 2/tara-sadeghi-cSia_DcTYio-unsplash.jpg'],
    3: ['Images/portfolio 3/avi-waxman-9T0vISZehUY-unsplash.jpg','Images/portfolio 3/clay-banks-ajFZ2q_CjvQ-unsplash.jpg','Images/portfolio 3/clay-banks-aumLKIgntRQ-unsplash.jpg','Images/portfolio 3/goran-ivos-aEMpxS5KDG4-unsplash.jpg'],
    4: ['Images/portfolio 4/allen-boguslavsky-vkU1oTU1d2Q-unsplash.jpg','Images/portfolio 4/clay-banks-zGRQYKuNa2E-unsplash.jpg','Images/portfolio 4/rawkkim-2Dd9XxTktMI-unsplash.jpg','Images/portfolio 4/yucel-moran-zR6zqRzJpHs-unsplash.jpg'],
    5: ['Images/portfolio 5/alex-tyson-jtOwf2TFOfs-unsplash.jpg','Images/portfolio 5/lotus-design-n-print-MlPWjgevq44-unsplash.jpg','Images/portfolio 5/planet-volumes-oUrqWiOz_sg-unsplash.jpg','Images/portfolio 5/uliana-kopanytsia-glRW5ivpwEM-unsplash.jpg'],
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
      imgs.slice(0,4).forEach((src, i) => {
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
    hint.textContent = 'Auto-rotating every 3s. Hover to pause.';
  })();
</script>
