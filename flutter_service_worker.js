'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4eec3e7d876846787626a191deea94a9",
"index.html": "9bf2c479c03567d5ea4fe00c618dc86b",
"/": "9bf2c479c03567d5ea4fe00c618dc86b",
"auth.html": "3e468e13518e03d7412aefcda6c0dcf0",
"main.dart.js": "2b3299b735e82651cff70543a281892a",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "89003fbdba6d468fb7dde05d348ed26b",
".git/ORIG_HEAD": "fa8c7396d09f37c09f3b06108f4adfd8",
".git/config": "4bce6a52dfb6735876ece475ff56aaac",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0c/73e11af8ae09e6b0f5b4cb71605847352bd632": "ff0d76a42014eb9074ae431d5a872dd1",
".git/objects/66/b90350ef8370219b2468c23ffa02573723b21d": "cbb351a42c30a0f239c41296a3432a69",
".git/objects/3b/276435e6eb4b5c06cf4556f77fa7a63268469c": "e22b50d1b9077919a5d27f650e12caf9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/db8abf9befe0c3d372874c6222c7a722546ec5": "27829d534429ed2b4231263cc386da8a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/0d14ab1184aed1bbbec04a55ca72bbc077c4b8": "d8d5952db46c3fee6e52d7abf41436c8",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/b5/84eb88ff52eeabf9efcc2fe22e00f6a4852948": "bd0bab5849e4a24f40c311eb7be95274",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/6f4c235308fedb15569c8bc20bc5aa4717a03f": "b990878d8c3c405edf7c7af5d5761b9c",
".git/objects/d6/82a5d16fda893e53749a2146053128a561c070": "a0e948be8398f7c134a8cc38065ef1ff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ec1b94a6a8933d4ae3cd74e4bb2b373cce8839": "56faa6fc3e409f3300b040517d7a9f3c",
".git/objects/ae/27afe998a4fccd8b811f846f78565ef8f8dc3d": "d3327e3a25c1264953331f3298c0a1ad",
".git/objects/ae/e8a41da2a235e931c8091c45b635b2b07feed8": "1a76dc6d7d29e39daa2f31322c3fa03d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/f49cf7b33e5adf962df585da2b94390ecea4db": "31216b3c84f34188cd976ce318e7ebe1",
".git/objects/fe/ab7371e7f13753f5822f3a46a671813754b680": "8dbf1dae812dec6db6aafa35f2c52b76",
".git/objects/c8/ebfc0dac7186ff0279ba736f2f22eb507bfa90": "5915e7d755a623cef542a0e446a9a139",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/387892e5db943bd9f3e324b715ac45210ed143": "0c694622f6c73d193ee631648614dc2b",
".git/objects/87/e590e6582b413129410f13925bb4b71b659937": "917679aee1b6ed2c88e955063df42b18",
".git/objects/28/3f73afad40c457710300ffdf69637b13cd1a38": "fff2530b8e0e29238e54c1db0ad863b6",
".git/objects/17/5a2b730d73ee95d8dfbf9af806969c505bd743": "03f2adefe2a92ff234dfd2dfb6c73a5c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/86/0d39eb36ddb81ce5328818b425e269d374594c": "1dfbd0f66559cd67ae1a440e18fbf585",
".git/objects/72/82c803f29f78cf0124c3fa3b017cafe40b1e46": "e57fdf0fea6a434203bba888aeda8b61",
".git/objects/2f/41cc27589207a6ba26b10dbc6dc6f67f43d778": "7421859ca494224c5005367514e6ebcd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/d5de406dedc308fa356be67e551c4c6c3d3483": "d8b12cb7a55b53487d8dcbb23813be4c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/683465f0f24ab016c6802af333c7bb8d906c1b": "736ba24b28f95a5031b8cfbb322ca35c",
".git/objects/00/f28a98421175917b87104eebcb0fcbb2521cf2": "530f011091b2f519ffa93b99c844182c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/54/55c5cc4878286334bf3499bd2d3203bfb0800b": "c34b96d21129e66514e1c2079dac1514",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/ef8c634aa6596e2ba0bf585290b1898fb1a2d2": "25c269717fac6de6ccd17d81a9d60429",
".git/objects/99/e8804a003ad14a12ffa90b67a023b1abf56f0a": "39ae3a8eb0d73e930fffe297a76f11c7",
".git/objects/99/8f52c92324017bbf407779b8529007e0ec9f7c": "b088b6d02724898d089d4824022f2dc3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/5bf9078843d6d8db981c85a3a653c49b4db806": "19ddeba11f6e3d19560152cc09c6edd6",
".git/objects/dc/2cada5cdbf207a8eab85f912c5827e0fe25506": "8f663220ffcebc293c2b84649a9da020",
".git/objects/af/0b96416d5a3cc0b2addf591d264e403f6cf6cf": "27cade5079389014640d9af46ad0a43b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/9a60cf3ae0009ea5a3170efae21557183a88c0": "379aeaebb9b06c23f3deda16a74e8c39",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/cb/f039559249fe0924aedca253e2386ef5d55c12": "4841a0115a9bc715fc50138d6ab5d333",
".git/objects/ce/2078f0b2c7bc21253c166d1605dbf62a8f7873": "b46961ffa097fc3373ceeed645f44538",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5b82c7fdc60c8f14bd52416a73c8f4372adcef": "55954a77072217924868007d304c36cf",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/9f0cb3c6829bf57030e13db6bb95936c6ee2eb": "f2a11023f98a152295c248ddac777ebb",
".git/objects/23/2013b243f730bc7c24515a682a286723a19edc": "e812a2a6251631d236426cf13d30b42f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/1d/b0735bbcb09b1297e1823093bbd5dad7a2af78": "f398bbb2def830624558cdc3b9a5c6dc",
".git/objects/1d/2da2925a2ed4ba5f12a64cc6b0a225ef58a2f0": "e8b4c471135599b4a4564bc74426cc78",
".git/objects/1c/e66954dda95f4fd68f9464e115bfdfc9619ee8": "4971a6cca8f04aa18c597907894463ed",
".git/objects/2b/aefa6c92284ab211616daf87e48fd7da57bd78": "a118bfa76de95e568d23e22a46d82792",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/22/00f3736c5054b25315a14ecbb9d4d8da07159c": "caa0ad695b6bf0ef738c0aaf9458f5fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3bce4bccfb58146cc108a1de11da4413",
".git/logs/refs/heads/main": "d5afe4bb9d6a99c5e2cd6cbe28c9bc16",
".git/logs/refs/remotes/origin/main": "29e759905a2e601a6daca7f2a602c246",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "aea8ecc5aac665b5cdb021277e7ffd5b",
".git/refs/remotes/origin/main": "aea8ecc5aac665b5cdb021277e7ffd5b",
".git/index": "1f60c701a54b44db06df953038dd176e",
".git/COMMIT_EDITMSG": "6ee4211277d324eb55a7a1431b1acf2f",
".git/FETCH_HEAD": "d074b45a340546be6abb78a313f4f42b",
"assets/AssetManifest.json": "e441dfcc3a954b2630806f3e7916b110",
"assets/NOTICES": "d998d5b90ece7454cd293e79f635a4c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5214ddacc20f4797eebf34a2aab25cd0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "b5cdd25e702b3b5eeb09aa80a12c5b20",
"assets/fonts/MaterialIcons-Regular.otf": "412345c92a6323da5161957c0c0c1a00",
"assets/assets/auth.html": "744a4979240903a73d7be8c27ff0a3d7",
"assets/assets/callback.html": "95858b3f43af01b0f7576a627c252d96",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
