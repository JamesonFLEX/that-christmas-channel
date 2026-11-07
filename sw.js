// That Christmas Channel service worker
// Pages: network first (always shows the newest version when online, cached copy when offline).
// Images/fonts/scripts: cache first, refreshed in the background.
const VERSION = 'tcc-v20261107-1350';
const CORE = ['./', './index.html', './site.webmanifest', './assets/logo.jpg', './assets/logo-180.jpg', './assets/icon-192.png', './assets/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // never cache the live stream, form posts or other sites' players
  if (url.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(url.host)) return;
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(fetch(req, {cache: 'no-store'}).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
