'use strict'

const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const escape = require('.')

const shortNonEscapeStr = 'huaishdPUHAUShduiasuZ9172387AUihausihdu'
const shortFullEscapeStr1 = '\n\r\f\t\b"\\jiOJIjaiushd\n\r\f\t\b"\\KJoa'
const shortFullEscapeStr2 = 'jiOJIjaiushd\n\r\f\t\b"\\KJoa\n\r\f\t\b"\\'
const shortMinimalEscapeStr = 'nsiojIOJnu"hu9nasd8"\\jiOJIjaiushd"\\KJoa'
const longerNonEscapeStr = 'huaishdPUHAUShduiasu6d7nhqmpshejy0fZ9172387AUihausih6d83jb9y0qajusidhnjasnj'
const longerFullEscapeStr = '\n\r\f\t\b"\\jiOJIjaiushd\n\r\f6d9gm\t\b"\\Kiusu8u\n\r\f8ajgshd\n\r\f7\t\b"\\KJoa'
const longerMinimalEscapeStr = 'nsioj\\IOJnu"hu9na7d9\\9qjgml1sd8"\\jiOJIjaius"hiushd"\\Kd"\\KJ'

suite.add('JSON short non escaped', function () {
  JSON.stringify(shortNonEscapeStr)
})
suite.add('this short non escaped', function () {
  escape(shortNonEscapeStr)
})

suite.add('JSON short full escape 1', function () {
  JSON.stringify(shortFullEscapeStr1)
})
suite.add('this short full escape 1', function () {
  escape(shortFullEscapeStr1)
})

suite.add('JSON short full escape 2', function () {
  JSON.stringify(shortFullEscapeStr2)
})
suite.add('this short full escape 2', function () {
  escape(shortFullEscapeStr2)
})

suite.add('JSON short minimal escape', function () {
  JSON.stringify(shortMinimalEscapeStr)
})
suite.add('this short minimal escape', function () {
  escape(shortMinimalEscapeStr)
})

suite.add('JSON longer non escape', function () {
  JSON.stringify(longerNonEscapeStr)
})
suite.add('this longer non escape', function () {
  escape(longerNonEscapeStr)
})

suite.add('JSON longer full escape', function () {
  JSON.stringify(longerFullEscapeStr)
})
suite.add('this longer full escape', function () {
  escape(longerFullEscapeStr)
})

suite.add('JSON longer minimal escape', function () {
  JSON.stringify(longerMinimalEscapeStr)
})
suite.add('this longer minimal escape', function () {
  escape(longerMinimalEscapeStr)
})

// add listeners
suite.on('cycle', function (event) {
  console.log(String(event.target))
})

suite.on('complete', function () {
  console.log('\nBenchmark done')
  // console.log('\nFastest is ' + this.filter('fastest').map('name'))
})

suite.run({ delay: 1, minSamples: 150 })
