'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0ea86e5ce3232c93178b33a9d076989c",
"index.html": "0e36b904794ec0b49393673812fa78ca",
"/": "0e36b904794ec0b49393673812fa78ca",
"main.dart.js": "1521da944c825c586b2478cb562d47ed",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "27ca853373e45822fe591875fc44bcc1",
"assets/AssetManifest.json": "c98c502349abc874c4f674259365b684",
"assets/NOTICES": "67460f9103497f1edb64ddbe0912cebb",
"assets/FontManifest.json": "db05d73559f221a3d044af6bf1125622",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "eb53256f38a51d6f99b2e1af40cd05b5",
"assets/fonts/MaterialIcons-Regular.otf": "a3ed154389bb12aca07969610c6a2e02",
"assets/assets/images/background.svg": "25462190ff668e72e960faf3b91725fd",
"assets/assets/images/Group%252016.svg": "70e6da63101f8dadea5d6b45ed1f5256",
"assets/assets/images/babycare.svg": "dd4389aa6105121e3ea6ff7b3fe650e4",
"assets/assets/images/brand2.png": "271564b4e33ce62aec2cc058fef1de6e",
"assets/assets/images/fullcream.svg": "24fe9e4f771b479e5989430e0051e88a",
"assets/assets/images/offers_grey.svg": "8a303464982a49fcb50c3e06f55505e0",
"assets/assets/images/Group%252028.svg": "9c45239fc96fea22ffc84caf97bb4a68",
"assets/assets/images/Group%252014.svg": "d7a3217d836034761e9de773741fae7b",
"assets/assets/images/lacatrina.png": "86880c2212045e85879ebcad45f5d78e",
"assets/assets/images/cosmatics.svg": "0d42108a9a07ee5bb5373324343d9b67",
"assets/assets/images/cheeseshredder.svg": "801514af545930f72a26645f0b576764",
"assets/assets/images/brand1.png": "eb333b77b39d8259300619d31b2d8dd4",
"assets/assets/images/milk.svg": "93323c90cf7462d06213b5679e8811ec",
"assets/assets/images/Home.svg": "4fdd26df47c1f2e2e2e59d0c354cf04d",
"assets/assets/images/healthcare.svg": "cbc423c553495e0e37e5761e2b28b780",
"assets/assets/images/logout.svg": "c8d78e34d78e7417a26ab611cc44461f",
"assets/assets/images/categorythree.svg": "61bab8fa51750adaf137b22576b0f744",
"assets/assets/images/cashgrey.svg": "18685c4eb0966ea62d960a992fd0d54b",
"assets/assets/images/unfav.svg": "a2cd0f3b35cb17a0fe59150a78695a86",
"assets/assets/images/offers_black.svg": "e7c033106ba0a25c61cd4a191618bc35",
"assets/assets/images/brand4.png": "7024b09bbbc64b2122ef425be9e13c35",
"assets/assets/images/Vector.svg": "863c94a1b48e847fa11f6a486941f89a",
"assets/assets/images/yelowchesse.svg": "4a58101730e3dc3098cc7c8482f6c48e",
"assets/assets/images/Group%252013.svg": "4b6e62a6f09f2287e72d06d1651d5b44",
"assets/assets/images/person_grey.svg": "d9fe0c84ef69f719187b5714b336a3a2",
"assets/assets/images/Bag_grey.svg": "0e304a5324f4ea1706e746f795eff7ee",
"assets/assets/images/drawer.svg": "dfb15183505adc02eac8b6f1833ed2f8",
"assets/assets/images/categoryfour.svg": "21be5a6eada6bb9a9a75dc8a444f1217",
"assets/assets/images/map_marker.svg": "f528bb54c3217be0aa64559ec3ac430a",
"assets/assets/images/product.svg": "e8a27517d1ee7e5911993957b0f7a5a5",
"assets/assets/images/settings.svg": "86bc665960f87b47ebf9bb3852969f58",
"assets/assets/images/Group%25202.svg": "67831924d4c7eac54c330addce2ad2ac",
"assets/assets/images/pin.svg": "d2da8f5ba18a39c45225002446680dc8",
"assets/assets/images/categoryone.svg": "2905fc24a35588179ddbd58e54a38e49",
"assets/assets/images/settingsb.svg": "5cd039235daffa653512b4548c510416",
"assets/assets/images/brand1.svg": "7536c4fe4574e66374b720d15af2441a",
"assets/assets/images/lacatrina.svg": "5db045d631ded838e64eddf947f96325",
"assets/assets/images/Bell.svg": "d1d4e7786c3c771762b2d597fe2bd9ee",
"assets/assets/images/Bag_black.svg": "cc3abc398e1dcf5a75068f969d210936",
"assets/assets/images/update.svg": "1d698ebed9498a743e4134eaac4d9589",
"assets/assets/images/stsblue.svg": "91fb2bebbd882f6772914cd00b073b8d",
"assets/assets/images/chickenburger.svg": "ab69a62d898be855b876edf707581d99",
"assets/assets/images/milkpowder.svg": "0ffb2d68903b04be6acf318c54a0a786",
"assets/assets/images/brand2.svg": "bc68c2335e2f79bb5336e27fb8dbd532",
"assets/assets/images/createpass.svg": "f77abd6e67e002e634f2fc497a9962d7",
"assets/assets/images/reviewthank.svg": "1e7f1c5b2f2b3a49a9a49ed404ed006a",
"assets/assets/images/brand3.svg": "27353e5c3f08f98b9efa5cd7880fdeed",
"assets/assets/images/background.png": "3ecec8079763bdf4bbc0dd2bd0e3d4ad",
"assets/assets/images/close.svg": "5f503bc87dd0251e757bb4e0bdd6485c",
"assets/assets/images/home_black.svg": "b33e3f63d819b8687f77c8fc81518012",
"assets/assets/images/Group%25209.svg": "71668be898f28ebd69250a52c674a8f1",
"assets/assets/images/clockgrey.svg": "44736b958fe20c002a4736373884cad3",
"assets/assets/images/brand.svg": "98eb73c9edfe2fe46fb66f19cb393f71",
"assets/assets/images/chessecream.svg": "186ad8a37b4aa0ada91649dcf8cceef5",
"assets/assets/images/verifyemail.svg": "ce4822cb792ee3b7cbbe434d79fbcd43",
"assets/assets/images/Setting.svg": "6d537db18ce0537566e4a640c6941b03",
"assets/assets/images/fail.svg": "ee2927d0a7b5d7c941774e0a980ba3d9",
"assets/assets/images/homeb.svg": "fdf9ab9d46757cd60fe1a07b307de3a6",
"assets/assets/images/Lables.svg": "7e268f2cff4c842a6f720dceb616f01a",
"assets/assets/images/categorytwo.svg": "fc57dc7239c498c51aba4687297b2dd3",
"assets/assets/images/notification.svg": "0ec5eb49c03cefdd8fe99bb7b0ab31fa",
"assets/assets/images/bradn3.png": "85f03a4d36eb3b664850344bfd97ea92",
"assets/assets/images/Home_grey.svg": "87403fdcecbb101a51dae07bfd73b8bd",
"assets/assets/images/meet.svg": "21137796534df498906b799cd1d1c7e4",
"assets/assets/images/baby.svg": "64ff1a969b51a01895ce11c3f1dd1dfe",
"assets/assets/images/chichkenpopcorn.svg": "b1a3c408a1c92a32229419d9c38454b9",
"assets/assets/images/fav.svg": "a62de738a0cf501940c702c6a5fa27da",
"assets/assets/images/vegetables.svg": "5f9b86e232d412fbaebf91fcbddba3b3",
"assets/assets/images/reg1.svg": "613d95629415ae362e3a29561ce9f07c",
"assets/assets/images/onboard.svg": "9c45239fc96fea22ffc84caf97bb4a68",
"assets/assets/images/product1.svg": "77e99fdc137781366760cc2fe93e54b1",
"assets/assets/images/Star.svg": "a4e088ba7040e8674276e87f4f90ecd3",
"assets/assets/images/reg2.svg": "49de6cefb41b934c326350e2582dfbaf",
"assets/assets/images/edit.svg": "4db7cbfbaaca413ed070196027de9f6b",
"assets/assets/images/contact_us.svg": "1a24a42b0bb7ced0070b3ae53c5d60b0",
"assets/assets/images/cash.svg": "2334aba054bfbc2e819847f760a04929",
"assets/assets/images/language.svg": "b0e71686cfc3906278701a2746e06ee7",
"assets/assets/images/no_address.svg": "d3b9bd893abf95ac500f650bf7ed28ae",
"assets/assets/images/trash-2.svg": "5c68171ce12642de0927886828b78c4f",
"assets/assets/images/clock.svg": "4a4326a55c3785dceb8d12b3cf5eb252",
"assets/assets/images/contactus.svg": "90dfd23c239c732ce607d6a246336482",
"assets/assets/images/success.svg": "6cb8a47c508d3c8e4c7afafcf57da724",
"assets/assets/images/location.svg": "271c7315b78ca1efc473bf1b144d560a",
"assets/assets/images/forgetpass.svg": "648335dcf5f7bd9fdda13c416fdcb521",
"assets/assets/images/addadd.svg": "4eeff325a16f4bb9a52395e0f1779035",
"assets/assets/images/image_not_found.png": "e9cc1b6b9ec1c9f9d9acf74ef1e25125",
"assets/assets/images/filter.svg": "7bbdb78154af9627310fce0dc13f8ede",
"assets/assets/images/cheese.svg": "b1e85330b79a5e72e17775732352465a",
"assets/assets/images/myaddress.svg": "7f4a08d63a076f4a447ed21ed94f044a",
"assets/assets/images/logo.svg": "9d505c6702ba9cb573fd275094ea8ade",
"assets/assets/images/help.svg": "4cea3acdef01c4bb25efeb295d7d6f7a",
"assets/assets/images/bradn3.svg": "cb2c4c2512bee7b51a27de1d64a02ebc",
"assets/assets/images/person_black.svg": "5e8eabcc6adb70b300797e4a54f2176d",
"assets/assets/images/unclelogo.svg": "cc92ca14f7a15eca045800888b24b16e",
"assets/assets/images/brand.png": "1accca0256f105acbda81dbbb1e5201b",
"assets/assets/images/starout.svg": "dbe56ba5cc2cc835bc9d27beb02147cc",
"assets/assets/images/heartb.svg": "3a57000e80e3085510fcdc1ddeba527a",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/PoppinsBold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/RalewayMedium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/assets/fonts/PoppinsRegular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/PoppinsSemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
