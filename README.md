# persist-storage
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Enable persistent storage in the browser.

By default storage such as `indexedDB` can be cleared when a device starts
running out of space. This module is a thin wrapper around the [`StorageManager
API`](http://devdocs.io/dom/storagemanager), checking if persistent storage is
enabled — and enabling it if it isn't enabled yet, and able to enable it.

## Usage
```js
var persist = require('persist-storage')

persist(function (success) {
  if (success) {
    console.log('Storage will not be cleared except by explicit user action')
  } else {
    console.log('Storage may be cleared by the UA under storage pressure.')
  }
})
```

## API
### `persist(callback(ok))`
Enable persistent storage. Calls a callback with a boolean that's `true` for
success and `false` for failure to enable it.

## License
[Apache-2.0](./LICENSE)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/persist-storage.svg?style=flat-square
[3]: https://npmjs.org/package/persist-storage
[4]: https://img.shields.io/travis/choojs/persist-storage/master.svg?style=flat-square
[5]: https://travis-ci.org/choojs/persist-storage
[6]: https://img.shields.io/codecov/c/github/choojs/persist-storage/master.svg?style=flat-square
[7]: https://codecov.io/github/choojs/persist-storage
[8]: http://img.shields.io/npm/dm/persist-storage.svg?style=flat-square
[9]: https://npmjs.org/package/persist-storage
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
