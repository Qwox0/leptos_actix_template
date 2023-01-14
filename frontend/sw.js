const cacheName = "testPWA-v1";

const contentToCache = [
    "/",
    /*
    "/icons/icon-1024.png",
    "/icons/icon-120.png",
    "/icons/icon-128.png",
    "/icons/icon-144.png",
    "/icons/icon-152.png",
    "/icons/icon-180.png",
    "/icons/icon-192.png",
    "/icons/icon-256.png",
    "/icons/icon-384.png",
    "/icons/icon-512.png",
    "/icons/icon-72.png",
    "/icons/icon-96.png",
    "/index.html",
    "/pwa.webmanifest",
    "/sw.js",

    /*
    "/style.scss",
    "/assets",

    "/public/favicon.ico",
    */
];

// Install PWA
self.addEventListener("install", event => {
    console.log("[Service Worker] Install");
    event.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log("[Service Worker] Caching all: ", contentToCache);
        await cache.addAll(contentToCache);
    })());
});

// Use cached Files
self.addEventListener("fetch", event => {
    event.respondWith((async () => {
        const r = await caches.match(event.request);
        if (r) {
            console.log(`[Service Worker] Fetched resource ${event.request.url}`);
            return r;
        }
        const response = await fetch(event.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
        cache.put(event.request, response.clone());
        return response;
    })());
});

// remove old files
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key === cacheName) return;
                    return caches.delete(key);
                })
            );
        })
    );
});
