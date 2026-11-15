const cacheName = 'elsyarif-medika-atlas-shell-v1';
const scope = new URL(self.registration.scope);
const shell = scope.href;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const response = await fetch(shell, { cache: 'reload' });
    if (!response.ok) throw new Error('Cannot cache app shell');
    const html = await response.clone().text();
    const assetPaths = Array.from(html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g), match => match[1]);
    const resources = [...new Set([
      ...assetPaths,
      './manifest.webmanifest',
      './icons/icon-180.png',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ].map(path => new URL(path, scope).href))];
    const cache = await caches.open(cacheName);
    await cache.addAll(resources);
    await cache.put(shell, response);
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith('elsyarif-medika-atlas-shell-') && name !== cacheName)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || !url.href.startsWith(shell)) return;

  if (request.mode === 'navigate' && url.pathname === scope.pathname) {
    event.respondWith(fetch(request).catch(() => caches.match(shell)));
    return;
  }
  if (url.pathname.startsWith(scope.pathname + 'assets/')) {
    event.respondWith((async () => {
      const cache = await caches.open(cacheName);
      const saved = await cache.match(request);
      if (saved) return saved;
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })());
  }
});
