// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('app-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/sw.js',
          'dino.png',     // Adjust paths based on your directory
          'pinguin.png',  // Adjust paths based on your directory
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  