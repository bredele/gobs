/**
 * Test dependencies.
 */

var test = require('tape')
var gobs = require('..')

test('should execute callback when all (and different) transitions occured', assert => {
  assert.plan(1)
  var i = 0
  var dispatch = gobs(['hello', 'world'], () =>  i++)
  dispatch('hello')
  dispatch('everybody')
  dispatch('world')
  assert.equal(i, 1)
})


test('should execute callback when all (and same) transitions occured', assert => {
  assert.plan(1)
  var i = 0
  var dispatch = gobs(['hello', 'hello'], () =>  i++)
  dispatch('hello')
  dispatch('world')
  dispatch('hello')
  assert.equal(i, 1)
})


test('should pass data', assert => {
  assert.plan(2)
  var i = 0
  var dispatch = gobs(['hello', 'world'], (first, second) =>  {
    assert.equal(first, 'first')
    assert.equal(second, 'second')
  })
  dispatch('hello', 'first')
  dispatch('world', 'second')

})
