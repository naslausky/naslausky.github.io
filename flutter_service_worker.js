'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "de56427541a56e9f9044d54568344bef",
".git/config": "b5daf41bd6a1a136ac9af3eb22dd6a71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "a170a5363a0e56593445ad8df70f36c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b372895bcf477702a964f8ec2c4b5102",
".git/logs/refs/heads/main": "4c9979872e11bce564cd4291df08269d",
".git/logs/refs/remotes/origin/main": "afc96957859594623d7fe402fd326ca4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/19/706e550e153d9c7523e75b2624645c50369392": "e7590819612b7f9903ac56aa2f3034e3",
".git/objects/1f/706a8a1f58307f5a62d1f41c38dd1deeec4428": "ec5f1e4a1e5e3ce8e04603b36e8f25cb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/f1c8222281b7b09851091ee0a8b9769c78e14e": "bb47bfa5c61a57d5ba994eb7cba193de",
".git/objects/2c/ac55869f5c6bd25e6c3c8d5082a4696ec40f18": "3c37cc6cb65206d780543fe06ec56c60",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3a/0104cda0d41ee46c9d7bea053fdf57f479048d": "f546e5a286a779bbce027b610361b904",
".git/objects/44/287d2ce5c690e4867168dbae305a1b80625036": "954a4a2bfaace6e0c154a224aac5cfd0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/2e40c5c6c284da93a34ba938f1420a80d1d592": "bbe7c602d52ee5927c05445aede31153",
".git/objects/4e/5a48eb55505f2a76b47525464aff72551bfbe6": "9a8e97ddedaebfc5d6151dcf1774f73d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/56b0f2814841a16ef36a26f215dc9fbd1bb3b6": "349291a8000a0ee2306fbfe8663f7000",
".git/objects/54/d008786bd16c3da8465a0e3c8e05e5c6901c6b": "ad66c7cde0670f4696c4ed60d79463ba",
".git/objects/58/0b367197cff2224d502d8f95ba8f5058c1c5c8": "e21e9bbed71b11561a1a579fa221fe58",
".git/objects/59/147f266c12eef51f4893491ef2db0345f13986": "9fae806a9d8e4675e33d588c4bac3079",
".git/objects/5d/383b2bd89e132546870a550a68eec9cf7af7c8": "1883bd0dd166b01a6d1fbd497fe713ed",
".git/objects/66/519c8084212b861296cb49159f719e06bb6a56": "f3b3d7db1dd7c1c6b7e2d37b6690224e",
".git/objects/66/ffd6bbc8359f8d6a93c42cf603f9472c774088": "8221ee39dafbd5a970d0b1ae9c5535db",
".git/objects/6b/6a5a0ce27cc912d3aa820121d4019e611531fe": "c74eb34746f3050feb935cc0844f2bdd",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/875f12c07e6cfd1cf30a2a4a229e91e33687be": "6a192460f80aaa30f5b92079f1002d87",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/08356ab392a4b760e1a1136d71a19a4e570260": "c758189e94825df48895bab5a96632f7",
".git/objects/87/7e3b26d8b7d5b31970dfd19cd7971e68064d09": "15651dde66e24cff86975757da74854a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/5ff731629fce613473dac7fb0b1c3328ec9c6e": "a2ecd1438f649bb9b7e8ed8f2cba52ae",
".git/objects/91/6ca06f79040e7f05a351c0c98f810881301fdc": "d162fa809c7859d1715a850eaef8c443",
".git/objects/92/27033fcadc77cec08ad442a63aeda126976279": "084960bc2e4934cd28bb1787ca37c219",
".git/objects/94/963663e0448555cac80cd82a5899107cfbde83": "3e732d9d202ec7bc7e34877d2438a890",
".git/objects/96/61c14cbce24c600040e123193f9d96b33557b5": "7b44fe6a5e134506e5772d639211648f",
".git/objects/98/3e3051dba8c1710597018508fd94dfb0992498": "5c16581678ceff594a799a6c97b488cc",
".git/objects/9c/28b7aff5c2b56fce3e23a84737430cffba8acd": "b2bbd9328336687782a8bac14957292b",
".git/objects/9c/7aae5f1b219d62c6a78653024262c24581aa9c": "040d12e8eba8e6899b98d0bd1b30082f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b6c2e19b499a18a59c8802a48b9a1482c81d56": "e18c2dd5b1bbb7bd02abbb0739525461",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/ae02459b7c112c8ba6c418b0b25ab37e4d2946": "7bd53792cd32a73209370f910425bf06",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/efcf395b4dc1810b869707099480f77fdf2cc8": "9d00539f8ed60b39fd7bdf563ef3f2d5",
".git/objects/d9/af8e3be24139e5de369a2b0533a8fcf53b2a60": "e3863d4c0bf41b3de8c09f4de7548a36",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/51953bfbc99741a9afb355615a75980b286511": "a70de5226a0347c4a2e02f0e12a6b4c7",
".git/objects/f0/5279840e1817f7084bf07e9bde411e6c51ce4b": "d112bfc870586a8751fcd997512df4f3",
".git/refs/heads/main": "15ffd8b12506c9c00b2376162bf356f8",
".git/refs/remotes/origin/main": "15ffd8b12506c9c00b2376162bf356f8",
"assets/AssetManifest.json": "f6a8cdeaa37e95b33e9f59bda38994e5",
"assets/assets/images/1.jpg": "9b09a230eb98f4a0606edfa4303fe0c6",
"assets/assets/images/2.jpg": "32ea1fc8838f07ed45a314d44cb2504f",
"assets/assets/images/avatar.jpg": "bbdaacc5940bd6d971631d536d75bfd5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "06c1a5443c1bf38ad87ef097226c3f32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "834d2553ad4706c9ded49335f03192d0",
"/": "834d2553ad4706c9ded49335f03192d0",
"main.dart.js": "0743ac6cda4104f9a7d780ddf3dc362c",
"manifest.json": "4c15dc87e24271a2269f810e270e9de1",
"version.json": "b7ad9ac1f439504e77fa6f39f58de13f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
