importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00f6490460221b4b10db.js",
    "revision": "9be7624c6dfe2d2c7b8886409c442cbb"
  },
  {
    "url": "/_nuxt/05bf2cf276710d43d226.js",
    "revision": "48204d5920a94f3e769694aa0660b2c7"
  },
  {
    "url": "/_nuxt/0e66b37ec21a534b0cd4.js",
    "revision": "dfab29b6dfb2ac603f450e3284b1d0ca"
  },
  {
    "url": "/_nuxt/1f6ea64ab6ec9651700a.js",
    "revision": "64396957c97c301266a8643bfef43247"
  },
  {
    "url": "/_nuxt/270871cd5becea7778a9.js",
    "revision": "d2fbdf91f9142d56a371c3fbd852a3bd"
  },
  {
    "url": "/_nuxt/573458ac700e4580690d.js",
    "revision": "ae182f55e2b744bae733ca239a6cb19e"
  },
  {
    "url": "/_nuxt/8b8ee7cc2d57ac6a5d99.js",
    "revision": "a2c2c55601ffdcd03d56eea3b23280f6"
  },
  {
    "url": "/_nuxt/bffa1ced98e5088303ad.js",
    "revision": "0824a303990fdc2aaacd5096296dd1f1"
  },
  {
    "url": "/_nuxt/e0b6d007c45f7fb7cef6.js",
    "revision": "fb21d108ac8d992e08a14998fbd6b37c"
  },
  {
    "url": "/_nuxt/ebee36b901ed11374980.js",
    "revision": "b65b0cdb082596e830eb074f99328c08"
  },
  {
    "url": "/_nuxt/f51a7c793681b7c47cc9.js",
    "revision": "5c9d2cb8936e69bf5f6b48d8f8c273fa"
  },
  {
    "url": "/_nuxt/fea8b230743c5357bda9.js",
    "revision": "8a60d88fc58dec34a2aaff0f35cddfd1"
  }
], {
  "cacheId": "heroes",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
