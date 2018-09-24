self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('v2').then(function(cache) {
			return Cache.addAll([
				'/skeleton',
				'js/main.js',
				'/index.html/',
				'/img/',
				'/restaurant.html/'				
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	var requestUrl = new URL9event.request.url);
		if (requestUrl.origin === location.origin) {
			if(requestUrl.pathname === '/') {
				event.respondWith(caches.match('/skeleton'));
				return;
			}
		}
}
