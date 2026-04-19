const CACHE_NAME = 'hadj-plc-expert-v1';
const urlsToCache = [
  './',
  './HADJ_PLC_EXPERT_PWA.html',
  './manifest.json',
  './plc-icon-192.png',
  './plc-icon-512.png',
  './plc-favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});