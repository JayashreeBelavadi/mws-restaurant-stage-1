console.log("Service worker registered");
var CACHE_NAME = 'v1';
var urlToCache = [
				'/',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',	
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/js/dbhelper.js',
				'/css/styles.css',
				'/index.html',
				'/restaurant.html',
				'/data/restaurants.json'
			];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlToCache);		
		})
	);
});

self.addEventListener('fetch', function(event) {
		event.respondWith(
			caches.match(event.request).then(function(response) {
			if(response) {
				return response;
			}	
			return fetch(event.request);
		}
	)
  );
});

self.addEventListener('activate',function(event) {
	var cacheWhitelist= 'pages-cache';
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
			cacheNames.map(function(cacheName) {
				if (cacheWhitelist.IndexOf(cacheName) === -1) {
				return caches.delete(cacheName);
				}
			})
		);
	})
   );
});                  

