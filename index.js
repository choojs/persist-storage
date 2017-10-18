var assert = require('assert')

module.exports = persist

function persist (cb) {
  assert.equal(typeof cb, 'function', 'persist-storage: cb should be type function')

  if (typeof window === 'undefined' ||
    typeof window.navigator === 'undefined' ||
    typeof window.navigator.storage === 'undefined') {
    return setTimeout(cb.bind(cb, false), 0)
  }

  window.navigator.storage.persisted().then(function (ok) {
    if (ok) return cb(ok)
    window.navigator.storage.persist().then(cb)
  })
}
