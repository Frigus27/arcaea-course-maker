'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d8cf03ffee8aa171e8241bb104fd1d0d",
"assets/AssetManifest.json": "90e212b417ed5e5e81bf361666a4e0e8",
"assets/assets/course/1080/bg-shapes_dark.png": "e97d7fb973e0695e0b7559ef545b5b17",
"assets/assets/course/1080/bg-shapes_light.png": "14b81eddff86ee9597934a58d7a97742",
"assets/assets/course/1080/dan-banner_01.png": "c33e81c9a1005033ae9450476e27b6e4",
"assets/assets/course/1080/dan-banner_02.png": "3d54fff0ef88276f17fc1a87697ce273",
"assets/assets/course/1080/dan-banner_03.png": "31e6d90c51690edae54f03e3662e852f",
"assets/assets/course/1080/dan-banner_04.png": "64efc69d1d29dddd188c00165cc6bbcb",
"assets/assets/course/1080/dan-banner_05.png": "f5c01023c3fbef78b7371012c716b1fc",
"assets/assets/course/1080/dan-banner_06.png": "015094ffae4059c1803791d861662248",
"assets/assets/course/1080/dan-banner_07.png": "208334109dbc82d8d10c85d587616755",
"assets/assets/course/1080/dan-banner_08.png": "e14839b61e593c679a0f224084cc8dcb",
"assets/assets/course/1080/dan-banner_09.png": "90415de21bea79b73c4bc18b6bf44480",
"assets/assets/course/1080/dan-banner_10.png": "6a97d0757943228d6e47449ab7740ded",
"assets/assets/course/1080/dan-banner_11.png": "622dc4493e2b125f42c442784d845724",
"assets/assets/course/1080/diff-beyond.png": "0e9e92cd6a4121731a71a1011a91481d",
"assets/assets/course/1080/diff-future.png": "ff858c7db9dc6f29fd16db638f26e965",
"assets/assets/course/1080/diff-past.png": "eb62eae3a00d72da66fe4a3faf8782e2",
"assets/assets/course/1080/diff-present.png": "4986d8ff615ee5860e674b88bb9063ef",
"assets/assets/course/1080/hidden.png": "2b962fb4d54ce84bf8144b0340688add",
"assets/assets/course/1080/packshape-pressed.png": "448e0c729edeb85a754170db0cf9e103",
"assets/assets/course/1080/packshape.png": "170ab2c363ec3088ee2d965994aca481",
"assets/assets/course/1080/song-arrows-dark.png": "c8e765dcfd47e478c33f389508543688",
"assets/assets/course/1080/song-arrows-light.png": "a141c5ee2b076111f54939fccc104001",
"assets/assets/course/cirno.jpg": "3755f54e687ea8fb6907a0d10682dec4",
"assets/assets/course/dan-chip_light.png": "97b3dc73bf5456e397d1d5b211b879ae",
"assets/assets/course/expando/dan-banner-accent-left_01.png": "8484ddfee9cddf218cd907151173a042",
"assets/assets/course/expando/dan-banner-accent-left_02.png": "e1691e48ba946ecc3e5a5caf8dde87fa",
"assets/assets/course/expando/dan-banner-accent-left_03.png": "bfed85f619f083e68cfd3a398de00906",
"assets/assets/course/expando/dan-banner-accent-left_04.png": "030f20ca18675aa9cd45c872d79dc24c",
"assets/assets/course/expando/dan-banner-accent-left_05.png": "d3916d97077e77e2d259e8a700eea8bd",
"assets/assets/course/expando/dan-banner-accent-left_06.png": "d5b2e871f84ab6f108ff19f23a2b2fad",
"assets/assets/course/expando/dan-banner-accent-left_07.png": "0e9b8514d21308c4f598abe1e05461bb",
"assets/assets/course/expando/dan-banner-accent-left_08.png": "7ffd02d04e76591423a9a4c9b486cc9f",
"assets/assets/course/expando/dan-banner-accent-left_09.png": "7ffd02d04e76591423a9a4c9b486cc9f",
"assets/assets/course/expando/dan-banner-accent-left_10.png": "ca82a4009561c6fc2d102d1b1e5620ad",
"assets/assets/course/expando/dan-banner-accent-left_11.png": "39975d16274dc12e1482a2c5d0f53338",
"assets/assets/course/expando/dan-banner-accent-middle_01.png": "003a08c8a5aab31c593f28463c6d7381",
"assets/assets/course/expando/dan-banner-accent-middle_02.png": "a85e9133227b878a1c1520ff24c5893d",
"assets/assets/course/expando/dan-banner-accent-middle_03.png": "846e946c3fa693b8a01932b28858c6a2",
"assets/assets/course/expando/dan-banner-accent-middle_04.png": "77012bd26275ff6b0afa3dea77794ecf",
"assets/assets/course/expando/dan-banner-accent-middle_05.png": "6b05b4dec9f28ea845e65bd85c6f0a51",
"assets/assets/course/expando/dan-banner-accent-middle_06.png": "f0b409fb79c6e21a8627b9f2fab91c28",
"assets/assets/course/expando/dan-banner-accent-middle_07.png": "6e7f29058f495c930718d8727cad3f05",
"assets/assets/course/expando/dan-banner-accent-middle_08.png": "6de3ba6e217dfb0452d208776c763f6e",
"assets/assets/course/expando/dan-banner-accent-middle_09.png": "6de3ba6e217dfb0452d208776c763f6e",
"assets/assets/course/expando/dan-banner-accent-middle_10.png": "af80e787412e57b213661b5abb133580",
"assets/assets/course/expando/dan-banner-accent-middle_11.png": "38b24c6f9d6b6800e59872f1e8482aea",
"assets/assets/course/expando/dan-banner-accent-right_01.png": "0627009e3ddb0cbcefbe1836fcc6716e",
"assets/assets/course/expando/dan-banner-accent-right_02.png": "2dc41523e635900d958b3411cd66a5d9",
"assets/assets/course/expando/dan-banner-accent-right_03.png": "cbf591ada4b13e46d9f62ab939b3e8d3",
"assets/assets/course/expando/dan-banner-accent-right_04.png": "cb188e3270b2116262db9f2528c5fbbf",
"assets/assets/course/expando/dan-banner-accent-right_05.png": "51ddfa5c59b9bdc8d2a793ba57aafe92",
"assets/assets/course/expando/dan-banner-accent-right_06.png": "a81af4f06b5be3437f7a9616e7c77379",
"assets/assets/course/expando/dan-banner-accent-right_07.png": "4209c285bb329f136b14bc0d66b54ea7",
"assets/assets/course/expando/dan-banner-accent-right_08.png": "67dbf15f68536d1c04efe6bc2968074f",
"assets/assets/course/expando/dan-banner-accent-right_09.png": "67dbf15f68536d1c04efe6bc2968074f",
"assets/assets/course/expando/dan-banner-accent-right_10.png": "13ef352cbd3eeb549477015d48dac449",
"assets/assets/course/expando/dan-banner-accent-right_11.png": "0e3d046ab5c04610e758552351d04ac6",
"assets/assets/course/scores.png": "0d45f332828540ea09e18c5150c7561f",
"assets/assets/font/Exo-Regular.ttf": "3b97b54d8ecf875e9982e068a5a2d057",
"assets/assets/font/GeosansLight.ttf": "36e6a06a4146af2f966ffcf021751724",
"assets/assets/font/Kazesawa-Bold.ttf": "564c43fe1acd088cc52d8ce9a2d2ffbc",
"assets/assets/font/Kazesawa-Light.ttf": "ec5a51c7dad69faaf925427d4a894533",
"assets/assets/font/Kazesawa-Regular.ttf": "b85f678950eba846585d822cd2a6db79",
"assets/assets/song_art/random.jpg": "67299542147fd602e556203be7b0243c",
"assets/FontManifest.json": "f2ea33c215b73e18b9ed241a806069bb",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "b9430b26f6a628b6b6889f17373d24cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14bd708d1435b1398ae64251076d7cb7",
"/": "14bd708d1435b1398ae64251076d7cb7",
"main.dart.js": "b7b8c94bb79a9176af607591cecc4e8b",
"manifest.json": "47c8c2e93fb85e7d0730d8a4daf2871c",
"version.json": "f9a1cb535deaf426de84efea2d85ff3d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
