'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d3c00df016f451ff35ea5f757f192d6c",
"assets/AssetManifest.bin.json": "9dd3806f3b28dbb4789ce2eeb7a30927",
"assets/AssetManifest.json": "1071083a6d7198222898e093db074ea2",
"assets/assets/fonts/goku/Goku%2520Stencil.ttf": "5e8fc0d94e7dcafce16e78d0e4821821",
"assets/assets/fonts/goku/Goku.ttf": "097905deb5713ad867cfff37b04f1941",
"assets/assets/fonts/raleway/Raleway-Black.ttf": "ca057783cb90d483d16662f202212050",
"assets/assets/fonts/raleway/Raleway-BlackItalic.ttf": "6bb69e40367ae9814db8c80152eed900",
"assets/assets/fonts/raleway/Raleway-Bold.ttf": "21c82294041b1504a5cbe4f566c8acd6",
"assets/assets/fonts/raleway/Raleway-BoldItalic.ttf": "17cc8fb94a06e0808b3a1e93a5ddee28",
"assets/assets/fonts/raleway/Raleway-ExtraBold.ttf": "1d8b73517fb37be5cf23cd3843ad4eb2",
"assets/assets/fonts/raleway/Raleway-ExtraBoldItalic.ttf": "33da5d431479287ebc94ecd1a9d1d039",
"assets/assets/fonts/raleway/Raleway-ExtraLight.ttf": "39de59bc225416348683ae039df2a1f9",
"assets/assets/fonts/raleway/Raleway-ExtraLightItalic.ttf": "7ef38cb3e0f9b6aa829cc7c9b90a615d",
"assets/assets/fonts/raleway/Raleway-Italic.ttf": "5579b5fda3005b7d349336b3425b9f89",
"assets/assets/fonts/raleway/Raleway-Light.ttf": "a36750fa9f5530b0c2760267df04ae37",
"assets/assets/fonts/raleway/Raleway-LightItalic.ttf": "bd42d0599d807527617bb3f5ed8df31b",
"assets/assets/fonts/raleway/Raleway-Medium.ttf": "0c8c5471e4a8bfe0f6167f56bcf1e2d3",
"assets/assets/fonts/raleway/Raleway-MediumItalic.ttf": "5aeca04536968ff9f32afc0bcd61eb60",
"assets/assets/fonts/raleway/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/fonts/raleway/Raleway-SemiBold.ttf": "804eb7bc11d3a38d5f5e108f8d1d1acd",
"assets/assets/fonts/raleway/Raleway-SemiBoldItalic.ttf": "5890daae80f0d711900058b808f819ec",
"assets/assets/fonts/raleway/Raleway-Thin.ttf": "02cf7464c6ce00474e8d90b69f103d75",
"assets/assets/fonts/raleway/Raleway-ThinItalic.ttf": "73456336793992177ea8a337ccaa6950",
"assets/assets/images/1.png": "32bb5f80b51aaf64e2768f9222d36e4e",
"assets/assets/images/2.png": "d7b64e52c14cb822643c640264764491",
"assets/assets/images/3.png": "83c81206e4d09b80d8faaaa3dd963431",
"assets/assets/images/4.png": "96c7a9d36f2366b8902d29d2a2070954",
"assets/assets/images/me.png": "49625dad4bf4ac9682920d926a18c3b8",
"assets/assets/images/multan.png": "534ee134c11730ee5ea59d73a7537c28",
"assets/assets/images/project-images/aam-express-1.png": "24e17f7a4578898152435e024c4ec248",
"assets/assets/images/project-images/battery-alarm-1.png": "f9f92854860f477300a5079b68353c15",
"assets/assets/images/project-images/battery-alarm-10.png": "474e474db7990f2dfc2f168b30af7020",
"assets/assets/images/project-images/battery-alarm-2.png": "23e77fb951c05090e0ef67bc1a9a20ff",
"assets/assets/images/project-images/battery-alarm-3.png": "45b4f5f3e0931e5e1be21e38fc39bdad",
"assets/assets/images/project-images/battery-alarm-4.png": "34da08aa9ce9241960679cb54660c302",
"assets/assets/images/project-images/battery-alarm-5.png": "d06bce2d83ab7d0c76004a79164f7957",
"assets/assets/images/project-images/battery-alarm-6.png": "1fed84e865324f76f35dbc48cbd1712b",
"assets/assets/images/project-images/battery-alarm-7.png": "fc033dcc6ac14e2ace6d2db903d53ed0",
"assets/assets/images/project-images/battery-alarm-8.png": "5d283902c1d5117a0fdb55669ee4b813",
"assets/assets/images/project-images/battery-alarm-9.png": "da302175edd8bc626adfa9a846a72c6e",
"assets/assets/images/project-images/bookly_1.jpeg": "76e89094a0d0ef5c4407775812ef6628",
"assets/assets/images/project-images/bookly_1.png": "08aa46b77f3337d06f5f987e67917b71",
"assets/assets/images/project-images/bookly_2.jpeg": "b7a00e73e0db8f267959476ebbead389",
"assets/assets/images/project-images/bookly_3.jpeg": "3de27222c6de1d5227634b3f77a326bf",
"assets/assets/images/project-images/bookly_4.jpeg": "0833f4932c94050d95027c58d2ed08d3",
"assets/assets/images/project-images/bookly_5.jpeg": "a032eb259a57a9e5bdb9aa6e9ff770bc",
"assets/assets/images/project-images/bookly_6.jpeg": "be53ac14c957f604d9e0aae7f83858cd",
"assets/assets/images/project-images/ic-1.png": "97e6eb7de5ce6f437f00327621d4ba42",
"assets/assets/images/project-images/ic-10.png": "e333c753752152c02df4c47fa607693b",
"assets/assets/images/project-images/ic-11.png": "99cc08790098f39b17dcdcd3e724b52a",
"assets/assets/images/project-images/ic-12.png": "b61cdce5d8f6e51364f34358d9551d1c",
"assets/assets/images/project-images/ic-13.png": "e5ad1c8ab9eab8438eee0d6f153f7b2d",
"assets/assets/images/project-images/ic-14.png": "d6c4ce3ed36a8da017725fc8459fbd63",
"assets/assets/images/project-images/ic-15.png": "1bfb33dd4ecd113c7ba34e553a4815b0",
"assets/assets/images/project-images/ic-2.png": "93fcf32d6db6084c91fe4cdab0a33d00",
"assets/assets/images/project-images/ic-3.png": "2c1b39ca595ec808e397deb485e06b52",
"assets/assets/images/project-images/ic-4.png": "55c17aaf5d63bb7ef6f3f4da1e9c7c5d",
"assets/assets/images/project-images/ic-5.png": "dc005322d22eb699b7842636808c6670",
"assets/assets/images/project-images/ic-6.png": "d7189678b04f344ce6c0ec647766e231",
"assets/assets/images/project-images/ic-7.png": "135e322afd547d5e93ead194463f8238",
"assets/assets/images/project-images/ic-8.png": "bfc5b30414e8cd9185c1eae58e699c9f",
"assets/assets/images/project-images/ic-9.png": "c8bdfa11d1d4eb62571ec2fa8b74c1a0",
"assets/assets/images/project-images/metro_app_1.jpg": "e63fc2cc7ef98c950c589e72809fada6",
"assets/assets/images/project-images/metro_app_1.png": "40cbdf44a74e6319f0b15aecb76b761a",
"assets/assets/images/project-images/metro_app_2.jpg": "9ba1d8d36ae351b4d7bbdebef4a7249f",
"assets/assets/images/project-images/metro_app_3.jpg": "ff1f6d56288ee4e2b720bcd3ec4c35f1",
"assets/assets/images/project-images/metro_app_4.jpg": "5c6fd65fbce30ea90f59cb4e13257edf",
"assets/assets/images/project-images/metro_app_5.jpg": "6ffff1625e0277af9eafc859534fc4fe",
"assets/assets/images/project-images/metro_app_6.jpg": "e3bfdf97eb0527b4f824da7567c233ff",
"assets/assets/images/project-images/metro_app_7.jpg": "26f7949710bf2b9fd8816ed72f4d23e2",
"assets/assets/images/project-images/metro_app_8.jpg": "5ae70b773a294c19efd75a4954d14925",
"assets/assets/images/project-images/metro_app_9.jpg": "58a39dbdb3b63a9e3e58b7feb44a4f0c",
"assets/assets/images/project-images/notes_app_1.jpg": "799532c78030d77d5df39b55c1c784c6",
"assets/assets/images/project-images/notes_app_1.png": "adc126a0decdf0d5042111a3d012bbfb",
"assets/assets/images/project-images/notes_app_2.jpg": "a01f7d2c77c1ecd1682110103527204e",
"assets/assets/images/project-images/notes_app_3.jpg": "2d12831d922c21de9e832950086f669b",
"assets/assets/images/project-images/photo.jpeg": "afe42672989827b36892b388bd41e7a4",
"assets/assets/images/project-images/photo_me.jpeg": "295e7f522f08c86aa5b3acb9bf9429cf",
"assets/assets/images/project-images/pl-1.png": "5c18a203e7dd1489febf6edc7b6c46ac",
"assets/assets/images/project-images/pl-2.png": "e2095931173b13995de7648bffbb8281",
"assets/assets/images/project-images/pl-3.png": "8b6775102c228789ca5e9a12d17af40a",
"assets/assets/images/project-images/pl-4.png": "e273641d3ed3cf2999f421852f266301",
"assets/assets/images/project-images/pl-5.png": "e4056f30775a35284c43f0f1ac293281",
"assets/assets/images/project-images/pl-6.png": "cc7076965d84d1a2fb2e7b292be3bcb9",
"assets/assets/images/project-images/pl-7.png": "a0224c3c07441aae39b745b6beabf5b5",
"assets/assets/images/project-images/pl-8.png": "baed4e7bb36d6829fefb1fa878393270",
"assets/assets/images/project-images/soaq_arabi1.png": "a4023d517f46cfe951097db2163ced20",
"assets/assets/images/project-images/soaq_arabi_10.jpeg": "fa59bb26c09b1368a70756632c5256ba",
"assets/assets/images/project-images/soaq_arabi_11.jpeg": "2cfddda1c224368f9bd818018ed66a92",
"assets/assets/images/project-images/soaq_arabi_12.jpeg": "b94f3c4d9a4b2a13aaa637e9b91f5760",
"assets/assets/images/project-images/soaq_arabi_13.jpeg": "2bf77c84f31fe9b1e8b4c20d9b8ebf42",
"assets/assets/images/project-images/soaq_arabi_14.jpeg": "c895f417596298a86511604c4426a71d",
"assets/assets/images/project-images/soaq_arabi_15.jpeg": "96c7bcf6e1f0acfd2efea0b5a10c5484",
"assets/assets/images/project-images/soaq_arabi_16.jpeg": "ac18a734d290b293a91da15f739c35e5",
"assets/assets/images/project-images/soaq_arabi_17.jpeg": "b8d0568133927f9deea1aa63dea4ebbc",
"assets/assets/images/project-images/soaq_arabi_2.jpeg": "b4743c7b6fdf5d23dc68997d3462262e",
"assets/assets/images/project-images/soaq_arabi_3.jpeg": "396d28ea36683c02a6cd2c0bb4d08e0f",
"assets/assets/images/project-images/soaq_arabi_4.jpeg": "a78d351c66ab65e525f678b694e484fb",
"assets/assets/images/project-images/soaq_arabi_5.jpeg": "6a876d46861d4929b37848b712a25cd6",
"assets/assets/images/project-images/soaq_arabi_6.jpeg": "bb5c39578fa41979065e03477076588f",
"assets/assets/images/project-images/soaq_arabi_7.jpeg": "4ca8e1ed603ee856df37a936464bf688",
"assets/assets/images/project-images/soaq_arabi_8.jpeg": "7ea54bddb84c8a905f255f8c7aedbc0d",
"assets/assets/images/project-images/soaq_arabi_9.jpeg": "8ade1faa83ea8a4c321f9afe8d91e04c",
"assets/assets/images/project-images/speed-test-1.png": "3eae591f637778dbac7a57d06f5e6a88",
"assets/assets/images/project-images/speed-test-2.png": "7e265cf54c8d08f0db51fce7285f55e3",
"assets/assets/images/project-images/speed-test-3.png": "9567169fc5b84bcced416522ff55c105",
"assets/assets/images/project-images/speed-test-4.png": "205fabe7275630c2371c60ffbcb2b77b",
"assets/assets/images/project-images/speed-test-5.png": "50577231e093590bc415396ecad74bff",
"assets/assets/images/project-images/speed-test-6.png": "2397ba97092b912f9c6a9fea46e2d626",
"assets/assets/images/project-images/speed-test-7.png": "e9407c5c140e23429300926c61e84674",
"assets/assets/images/project-images/speed-test-8.jpeg": "44c614a90f73379463165f5192c3fd4c",
"assets/assets/images/project-images/speed-test-8.png": "1d7833fef4f437b5ca8a31caeb476484",
"assets/assets/images/project-images/syncwell-1.png": "b6fa33d2521b90470140188118b1e406",
"assets/assets/images/project-images/syncwell-10.png": "3418204ab4ab6d5cec1e34efd3803fe4",
"assets/assets/images/project-images/syncwell-11.png": "543ea71d499838b8e1bfe81775596350",
"assets/assets/images/project-images/syncwell-12.png": "fa58dce53410b661ffef514d93c9fac7",
"assets/assets/images/project-images/syncwell-13.png": "f4338cf9d29256729a4a72ebc7257cf9",
"assets/assets/images/project-images/syncwell-14.png": "a0814e038c7e4e87c16ef0cb67ce5000",
"assets/assets/images/project-images/syncwell-15.png": "168732baac38af33d514f5dff1e09b44",
"assets/assets/images/project-images/syncwell-16.png": "7ce9eda75b53cc79df220de0f32360ac",
"assets/assets/images/project-images/syncwell-2.png": "cb5370663be6af57737d940952238be4",
"assets/assets/images/project-images/syncwell-3.png": "b5ec9aa738260a869796536287db25a8",
"assets/assets/images/project-images/syncwell-4.png": "69d81e8f33fa8a71b44f072f83d22a91",
"assets/assets/images/project-images/syncwell-5.png": "34ce67dc5fc7adaa1d1bddbe7c2e8632",
"assets/assets/images/project-images/syncwell-6.png": "c17837dd7f774064a3562ee071418bbe",
"assets/assets/images/project-images/syncwell-7.png": "bfa737c358e9404f5b5f5625dd35fd70",
"assets/assets/images/project-images/syncwell-8.png": "9908429b5e4d6b0489b09dffb64eb364",
"assets/assets/images/project-images/syncwell-9.png": "d1356ddf2cb0e8387a7d4bd336120b81",
"assets/assets/images/project-images/urkido-1.png": "8f4b6c417112c00f9aea31b67d016629",
"assets/assets/images/project-images/urkido-10.png": "3ebed45f820597dfcd1a22564539c78b",
"assets/assets/images/project-images/urkido-11.png": "b9bfdce4792ddf79a604f47475d4c5ad",
"assets/assets/images/project-images/urkido-12.png": "8ffd0080a292f83ee6f0aa66e680031a",
"assets/assets/images/project-images/urkido-13.png": "f213d4e396fe44d9f4504d1eafbb4015",
"assets/assets/images/project-images/urkido-14.png": "971e3eaca3eb71e044032522b2c63e96",
"assets/assets/images/project-images/urkido-15.png": "6d168bbbef8be8405a6bad33865bfe97",
"assets/assets/images/project-images/urkido-16.png": "981a69a6a017716d57ad436b597231d1",
"assets/assets/images/project-images/urkido-17.png": "2994e98bf0b8f42a3de979d77dfbc760",
"assets/assets/images/project-images/urkido-18.png": "30d4441810c4a19ec993964ca4c49375",
"assets/assets/images/project-images/urkido-19.png": "d27757414a11dd5b5a04006d46701f1e",
"assets/assets/images/project-images/urkido-2.png": "3fe3da7a4927d1c52088817b60501ae3",
"assets/assets/images/project-images/urkido-3.png": "237d71222551877bc4d54408ed8badc4",
"assets/assets/images/project-images/urkido-4.png": "4aa180a0755ae49e0b9182bda0f71674",
"assets/assets/images/project-images/urkido-5.png": "be94fd0cc800753c09c621522c050fb0",
"assets/assets/images/project-images/urkido-6.png": "a733db6c55e54666ea6b0b5a38e2e0f0",
"assets/assets/images/project-images/urkido-7.png": "63807c53993c482e56de7124bab7ec01",
"assets/assets/images/project-images/urkido-8.png": "3138e6e6e19ee560482af4131e8f613f",
"assets/assets/images/project-images/urkido-9.png": "a42ea006fc0974ebcae30c840dc660cc",
"assets/assets/images/project-thumnail.png": "2c4c99b770299699069375c075b2303c",
"assets/assets/images/syncwell-onboard.png": "303636adeeda5734675c94f9d4b9d825",
"assets/assets/images/working_doodle.png": "88dc6c6b3463cec3f52e1b20dbbffc81",
"assets/assets/svg/apple.svg": "0fc5c1431bfb7f3442754566f7730ac6",
"assets/assets/svg/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svg/linkedIn.svg": "fc81555a452e0fafcb442f489ceef19d",
"assets/assets/svg/playstore.svg": "c84e1855c8200db61a045eb5721d36ec",
"assets/assets/svg/x.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/FontManifest.json": "6cb66dfc36a92ddcd0c14ff31b075122",
"assets/fonts/MaterialIcons-Regular.otf": "cd4e9113130dbf701b1605b25e284cfd",
"assets/NOTICES": "0f2d7362cbfb0b32cc7ab206e89165b5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "44c18d3c4e435c4225c4b268aec98c2e",
"icons/android-chrome-192x192.png": "73e03c7b6355074c9652aed87d8ab1da",
"icons/android-chrome-384x384.png": "7585e782e58f1a2f0a770af72438e5fc",
"icons/apple-touch-icon.png": "85a92caf773cb85587a6be64e35b96ab",
"icons/browserconfig.xml": "68c9044fa4a08749efb85bb2a4edaede",
"icons/favicon-16x16.png": "7b0e9168d86cb4cf87e77bf980345117",
"icons/favicon-32x32.png": "65dc08ff3bb879efb1dfc32774889d20",
"icons/favicon.ico": "b808cd3b34e63d3d0abe8352a218ae8d",
"icons/mstile-150x150.png": "5d87d0d4f84dc6622eea872e3b799e13",
"icons/safari-pinned-tab.svg": "eff2c76bbc743a919f7ae5e13e8e73ff",
"icons/site.webmanifest": "facd21a39afa138ed313c2dfa91498c1",
"index.html": "a66150296770f345ee4f6eb5a82fd69f",
"/": "a66150296770f345ee4f6eb5a82fd69f",
"main.dart.js": "e0ec7d83481dd9ec5464450930448eb5",
"manifest.json": "7a20cd3a7736911df47f9e1d2d5ad0ef",
"verce.json": "bce2f5ed4c9ce0ed07fdf1fb3b035701",
"version.json": "988901dc33b5dc50f175175837e0a411"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
