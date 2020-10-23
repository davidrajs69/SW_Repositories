const cacheName = 'SWCache';
const cachedAssets = ['index.html','client.js'];

//Install Service Worker
self.addEventListener('install', (e) => {
    console.log('Service Worker : Installed');
    //Wait until is used to stop the activity of the service worker till the promise insite wait until is resolved/rejected/handler 
    e.waitUntil(
        caches.open(cacheName).then( cache => {
            cache.addAll(cachedAssets);
        }).then(() => {
            self.skipWaiting();
        })
    );
})

self.addEventListener('activate',(e) => {
    console.log('Service Worker : Activated');
    //remove unwanted caches
})

self.addEventListener('fetch', (e) => {
    console.log('Fetch',e.request);
    e.respondWith(
        fetch(e.request).catch(()=>{
            return caches.match(e.request);
        })
    );
})
