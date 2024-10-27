self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('kalender-cache').then((cache) => {
        return cache.addAll([
          '/',
          'index.html',
          'manifest.json',
          'favicon.ico',
          'icon-192x192.png',
          'icon-512x512.png'
          // Hapus 'styles.css' jika file ini tidak ada
        ]).catch((error) => {
          console.error('Failed to cache:', error);
        });
      })
    );
  });
  