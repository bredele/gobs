/**
 * Test dependencies.
 */

var test = require('tape')
var gobs = require('..')

test('should execute callback when all transitions occured', assert => {
  assert.plan(1)
  var i = 0
  var dispatch = gobs(['hello', 'world'], () =>  i++)
  dispatch('hello')
  dispatch('everybody')
  dispatch('world')
  assert.equal(i, 2)
})
