'use strict'

const { test } = require('tap')
const escape = require('.')

test('should escape control chars', (t) => {
  t.plan(1)
  const str = '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r' +
              '\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017' +
              '\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f\"\\abc012'

  t.equal(escape(str), JSON.stringify(str))
})

test('should escape surrogate pair', (t) => {
  t.plan(1)
  const str = '\uDF06\uD834'

  t.equal(escape(str), JSON.stringify(str))
})
