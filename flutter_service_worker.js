'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb04c11178f63e0485b8dc9359187828",
".git/config": "a5d5cb212bd4eff86db6530b5879fd89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "20b38223510c5f22814407551d870617",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "24598a22d2b54e2ccd59fde329b95d81",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a956fe18f23dc5197ff46f87eb2ff015",
".git/logs/refs/heads/main": "a956fe18f23dc5197ff46f87eb2ff015",
".git/logs/refs/remotes/origin/HEAD": "bcd88873ce9d5e10cd792dfa3f6a3cc6",
".git/logs/refs/remotes/origin/main": "663fc06ee99e0594fbec36e67e58d4d7",
".git/objects/01/52528a6c22a9419023fcd8c59c94c5c6b7ad42": "b3883cdfe3b91d16b42ea0a26e497b4c",
".git/objects/03/01030b760e3362b65a125ac87ec647fa4a9435": "98bcde5e14db7209f9e0e9e6c61c3135",
".git/objects/05/2496796699ce01cf6ba1f4764466159b98ec50": "d8ef4a0a136f39ca36b764b64f26133b",
".git/objects/12/c11b97c1700b5966a1920bbe9f3e55d4415660": "cfdf7e4abab72fedb11f0d848cddebd6",
".git/objects/17/db7c0e58e5e01ec92f449a651a22b794dc9731": "b45719b6ab2c8eb7e0fa7ea21ee6c3f3",
".git/objects/1c/60d5289aaebf4fe675e2b3121eabe6790ba566": "09cbd8dd0af8f6ccc4e1c4da643cab0a",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/f08289f80b4dfc4f1338bb6764ed377a3ec5ec": "0843f542632f0dc35bb246325d495385",
".git/objects/24/f26d72dd3f0d2cdd965b0a46219e930c2a29a9": "3ba902e3f103efd1288203c4db691aee",
".git/objects/27/072aa660a2aca52470bcbe832c0d7112342462": "5689e110c07b2e17dd1d033125fc1876",
".git/objects/29/e0a909a9d5a4baa4454593a3169840fcaba498": "ce2f141e13160ad5b4f933dc78ed79d3",
".git/objects/2a/353d941de7b20f30d38fff388caf03a3d05b2c": "d67d04b9e1f61b15fcb62d365f152bc1",
".git/objects/2c/69c5fbc40f4bdea8e3e4d484f3c2a709852a35": "7292995374402976f81c1a566ddd2a01",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/38/f978eb24889ea80b92f967a3a528753cd8dc9e": "1911d95ed1cfc0ade5f5362ee75194cd",
".git/objects/51/f33f4b032995649054f916680bba72521d3fbf": "451cf21f9f6450418dc69417efd13509",
".git/objects/58/c619a24e62f06216ea1b9dc81f42a17eb81989": "8e45b87744ca8452cc654b60ee10ac3b",
".git/objects/60/bdeff41525e084d98b23f18ac2a141bccad3d1": "02968e4fc01fea8038f30a7f81f7da2f",
".git/objects/63/a7d38eead2a953de1405d4034c37b7986a9dce": "7421686bc7cdc133ede0b11dc2345b70",
".git/objects/65/aca18a1a392c75e0a3ea4984612b407738e4a4": "13244c8cf65727c344d1a9cc49eee90a",
".git/objects/67/73028fdc8fb2e0c3cf8940a3288e02a5448a4d": "362670896b23c6b5886eff732bae0d29",
".git/objects/70/0846715b15ffc2223ff5e053757288d5cd64ea": "8b438bb89d9fb45a7884a8cfc41a7293",
".git/objects/72/86c59a4356e00806b3d8391614bbaf85745a0a": "00a789c4afd3e4b5236e57dc323b0bd0",
".git/objects/7e/0288b4f55439fdce69b3f8d2dfcd6258d856a6": "1f0680f28aba07c4b010b9e1d97ce6da",
".git/objects/80/0210a715431b7f1d5d4a0bf459fa0500448f72": "ee20c14c010c1ab07d08a3361210ccb5",
".git/objects/87/fcd48387b58c97a3ea4f3cfdef618dc411fb32": "4514618e53dc86fd4c0c7169725bccf8",
".git/objects/88/fb45f456bc8a7ffbefc8b36912ed5db2d6e663": "87a5a5f7df1ad83629f7a0b7d7108e08",
".git/objects/92/ceb31227137500ccce238952e1afa6008b7bdb": "7c06f800466c9cefebfdfd518ba61ea4",
".git/objects/9e/dbe12ac66e1ab8366b9b1e2419f991adb7f39c": "3d32a1a96f903c9fd0a9324914413e05",
".git/objects/a6/515f1726d1b3a0fb86bb21e0d15208f31386f2": "6fe1a41630a895c7a1e304a424365d30",
".git/objects/a9/0c213cc00bba59672f0101df5a025c6ae49a3c": "5da1c2aa409ebdc2cdb9437c853286e9",
".git/objects/af/6ce94f16f5ea6c85405af7ee7fab339f444ea2": "751c796fd3ed5a3904bce78bc751c90e",
".git/objects/b0/d4a64d9f668e03eac78a3098cd627621b5f54a": "924834c17100bf51bf6d9fd3156fa1fa",
".git/objects/b2/fbb7aad5cfa0c616b7ca7fe14fb0c8f8f9e1b8": "f9a1fe4c151c73b36c57da1c00afc3f3",
".git/objects/b6/f4d0ce933d1e8e1bfa78aeb219b1932b2d1834": "facf67f293b3b483ff4d2d7806d4d63e",
".git/objects/bb/b1513340ce31931e8c926b5fe4a00483585d73": "9081c8c57961c7fe4eb7d85fcdf4f1bb",
".git/objects/bf/c6ebfe76db8b7920e5f53495bb577b41016ca6": "fa883d0c86c3bdbf8752bd3c6d317033",
".git/objects/c2/77c23c3fb4538a687f6731954d98d507148a9b": "c066f857c2a2ba47fe713bb27696c304",
".git/objects/c5/f734da4def16f403e174cf75581bc164f0d0ae": "26b1b662847250915e70c370eeec8f5a",
".git/objects/c7/80b017a72fb29c4d32b7efbca19342ee66d4c0": "95ae16e588da522a7f35d5c5e514fdf2",
".git/objects/ca/6d3a6c0065f4c2eb00e607f82f48ac05c570b6": "07b07746d3d7ec190d4c53bd621f317a",
".git/objects/d1/9a780c3d7fe7bd57956df313a68cd44c5b9ca8": "a3822525d69a735c7cf2a69ff7544c1a",
".git/objects/d4/7acb39172c08d51d629fa04ec5893d093c7e95": "dcc851de9cd811429e2e46a5e09883de",
".git/objects/d5/01b768fb1eeede7630383c06a09c911e195d31": "c82d2737684676d03e77ef677f3daf0f",
".git/objects/d6/58ec1b2516842bbe7ac1a64561394d228b2100": "40e3395e1a0bc81a78a6fc9a7c680559",
".git/objects/d7/3b90e445bb6c4d8c67b8efa8f533c791ef9afe": "6601acbcd92d0f39f95003d44cc051c7",
".git/objects/dc/d071a5acfc6ccb5adae0d4ea67e83e52250143": "ea88248b0e05edcafbec454b6547922e",
".git/objects/ed/2678b18be273a45e320b0d3fa71078cd3e2f8d": "6fc6f53476f864fc20e70f46956350a7",
".git/objects/f0/3a004c3bc02b152727f63406b92348e4f9d5b2": "0457dac7066e68ea347a798f17abf1b0",
".git/objects/f1/3184d0668eed44095773b52838caa0c567728a": "c78c56c0754f0b93cba1142b4ce8bc88",
".git/objects/f5/8a2ee44a9de99d3a89cae1b0d962d3be938ee7": "d3e7b7c61256bef2fa356498363f5e52",
".git/objects/f6/482f61b7d42989bedb72e6003a841201b79a3e": "a6ad4fb649a3efd90ffef73232d30d99",
".git/objects/f7/b40866926725cc3381dc41291e4e68ecc2a02d": "b996a18d87e8db229177b82c0ad8ba86",
".git/objects/f9/483816351192c4d77ff88f14a9251e46144146": "f7235400778926edb41d00e6338e54fe",
".git/objects/f9/e5298aa788c85b7559feb8223f5ceaeb02511a": "f2157bddf84848c361f5418025400592",
".git/objects/pack/pack-16d4de5209060f86dc11a942bc368c771520b278.idx": "d2e6a830efda210ca8f891955cb1ab31",
".git/objects/pack/pack-16d4de5209060f86dc11a942bc368c771520b278.pack": "b616732dfbf0b69ebb28807d553c9168",
".git/objects/pack/pack-16d4de5209060f86dc11a942bc368c771520b278.rev": "691c7e78348f2840438dba2d1e94dd55",
".git/packed-refs": "117fdb3f423cf10449b9f1e053fe9844",
".git/refs/heads/main": "d04901ac3d6748f07b411d007d5e5ad4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d04901ac3d6748f07b411d007d5e5ad4",
"assets/AssetManifest.bin": "d0067002336871b856fa272da7b54a9f",
"assets/AssetManifest.json": "b21e2397f72b18b9f9ddf83832dd8822",
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
"assets/assets/course/1080/dan-banner_12.png": "c5e44ee9dd283c56ee4034568d60ea70",
"assets/assets/course/1080/diff-beyond.png": "0e9e92cd6a4121731a71a1011a91481d",
"assets/assets/course/1080/diff-eternal.png": "57ad451e734ab17e50a9fd9f786fd25d",
"assets/assets/course/1080/diff-future.png": "ff858c7db9dc6f29fd16db638f26e965",
"assets/assets/course/1080/diff-past.png": "eb62eae3a00d72da66fe4a3faf8782e2",
"assets/assets/course/1080/diff-present.png": "4986d8ff615ee5860e674b88bb9063ef",
"assets/assets/course/1080/hidden.png": "2b962fb4d54ce84bf8144b0340688add",
"assets/assets/course/1080/packshape-pressed.png": "448e0c729edeb85a754170db0cf9e103",
"assets/assets/course/1080/packshape.png": "170ab2c363ec3088ee2d965994aca481",
"assets/assets/course/1080/song-arrows-dark.png": "c8e765dcfd47e478c33f389508543688",
"assets/assets/course/1080/song-arrows-light.png": "a141c5ee2b076111f54939fccc104001",
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
"assets/assets/course/expando/dan-banner-accent-left_12.png": "39975d16274dc12e1482a2c5d0f53338",
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
"assets/assets/course/expando/dan-banner-accent-middle_12.png": "38b24c6f9d6b6800e59872f1e8482aea",
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
"assets/assets/course/expando/dan-banner-accent-right_12.png": "0e3d046ab5c04610e758552351d04ac6",
"assets/assets/course/potentialtext.png": "1f6609e5d0891e92dce202015e47d534",
"assets/assets/course/reward_example.png": "2df13856f455fe0ab8864fd37c2e99a4",
"assets/assets/course/scores.png": "0d45f332828540ea09e18c5150c7561f",
"assets/assets/font/Exo-Regular.ttf": "3b97b54d8ecf875e9982e068a5a2d057",
"assets/assets/font/GeosansLight.ttf": "36e6a06a4146af2f966ffcf021751724",
"assets/assets/font/Kazesawa-Bold.ttf": "564c43fe1acd088cc52d8ce9a2d2ffbc",
"assets/assets/font/Kazesawa-Light.ttf": "ec5a51c7dad69faaf925427d4a894533",
"assets/assets/font/Kazesawa-Regular.ttf": "b85f678950eba846585d822cd2a6db79",
"assets/assets/song_art/random.jpg": "67299542147fd602e556203be7b0243c",
"assets/FontManifest.json": "f2ea33c215b73e18b9ed241a806069bb",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "bb68218bd97401beadf928a90c506e67",
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
"index.html": "ca45773f2d45c97fb97b55ede5ef9e13",
"/": "ca45773f2d45c97fb97b55ede5ef9e13",
"main.dart.js": "f7ceb75bbd3e1532d29724a5533f64c3",
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
