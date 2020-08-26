const FILES_TO_CACHE = [
    '/index.html',
];

evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
    })
);

evt.waitUntil(
    caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
            }
        }));
    })
);

if (evt.request.mode !== 'navigate') {
    return;
}
evt.respondWith(
    fetch(evt.request)
    .catch(() => {
        return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match('offline.html');
            });
    })
);

const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/app.js',
    '/install.js',
    '/luxon-1.11.4.js',
    '/style.css',
    '/maain.js',
    '/lunch.js',
    'icon.png',
    '/Roboto-Regular.ttf'
];

if (evt.request.url.includes('/forecast/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
        caches.open(DATA_CACHE_NAME).then((cache) => {
            return fetch(evt.request)
                .then((response) => {
                    if (response.status === 200) {
                        cache.put(evt.request.url, response.clone());
                    }
                    return response;
                }).catch((err) => {
                    return cache.match(evt.request);
                });
        }));
    return;
}
evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
                return response || fetch(evt.request);
            });
    })
);