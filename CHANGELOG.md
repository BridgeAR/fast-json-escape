# Changelog

## 2.0.0 - Feb 2023

- Support well formed JSON.stringify (escape surrogate code points U+D800 through U+DFFF)
- Added TypeScript definition
- __[BREAKING]__ The input has to be of type string and throws an error, if it's not
- __[BREAKING]__ The minimum supported Node.js version is v12

## 1.0.1 - Jun 2018

- Fix escaping for specific characters
