// Initialize AOS (Animate On Scroll)
AOS.init();

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize Glide.js Carousel
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  perView: 1,
  breakpoints: {
    768: { perView: 1 },
    1024: { perView: 2 },
    1280: { perView: 3 }
  }
}).mount();

// Initialize Leaflet Map
const map = L.map('travel-map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors',
  maxZoom: 18,
}).addTo(map);

// Add destination markers
L.marker([-8.4095, 115.1889]).addTo(map).bindPopup('Bali');
L.marker([48.8566, 2.3522]).addTo(map).bindPopup('Paris');
L.marker([35.6895, 139.6917]).addTo(map).bindPopup('Tokyo');
L.marker([40.7128, -74.0060]).addTo(map).bindPopup('New York');
L.marker([-22.9068, -43.1729]).addTo(map).bindPopup('Rio de Janeiro');
L.marker([-33.9249, 18.4241]).addTo(map).bindPopup('Cape Town');
L.marker([41.9028, 12.4964]).addTo(map).bindPopup('Rome');
L.marker([-33.8688, 151.2093]).addTo(map).bindPopup('Sydney');

// Initialize Granim.js Gradient Animation
const granimInstance = new Granim({
  element: '#gradient-canvas',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#FF6B6B', '#FFD93D'],
        ['#6BCB77', '#4D96FF'],
        ['#FF6B6B', '#845EC2']
      ]
    }
  }
});