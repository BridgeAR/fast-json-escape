'use strict'

// eslint-disable-next-line
const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/

function strEscape (str) {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected input to be of type string, received type ${typeof str} (${str})`)
  }
  // Only use the regular expression for shorter input. The overhead is
  // otherwise too much.
  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
    return `"${str}"`
  }
  return JSON.stringify(str)
}

module.exports = strEscape
