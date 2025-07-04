// Initialize AOS (Animate On Scroll)
AOS.init();

// Initialize Glide.js Carousel
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  perView: 1,
  breakpoints: {
    768: {
      perView: 1
    },
    1024: {
      perView: 2
    },
    1280: {
      perView: 3
    }
  }
}).mount();

// Initialize Leaflet Map
const map = L.map('travel-map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors',
  maxZoom: 18,
}).addTo(map);

// Add markers to map
L.marker([-8.4095, 115.1889]).addTo(map).bindPopup('Bali');
L.marker([48.8566, 2.3522]).addTo(map).bindPopup('Paris');
L.marker([35.6895, 139.6917]).addTo(map).bindPopup('Tokyo');

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