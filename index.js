

/**
 * Execute callback on multiple conditions.
 *
 * A condition can appear more than one time.
 *
 * @param {Array} transitions
 * @param {Function} cb
 * @param {Boolean} repeat
 * @return {Function}
 * @api public
 */

module.exports = function(transitions, cb, repeat) {
  var clone = transitions.slice(0)
  var data = []
  return function(topic, arg) {
    var index = transitions.indexOf(topic)
    if(index > -1) {
      transitions.splice(index, 1)
      data.splice(clone.indexOf(topic), 1, arg)
    }
    if(!transitions.length) {
      cb.apply(null, data)
      if(repeat) transitions = clone.slice(0)
    }
  }
}
