

/**
 * Execute callback on multiple conditions.
 *
 * A condition can appear more than one time.
 *
 * @param {Array} transitions
 * @param {Function} cb
 * @return {Function}
 * @api public
 */

module.exports = function(transitions, cb) {
  return function(event) {
    var index = transitions.indexOf(event)
    if(index > -1) transitions.splice(index, 1)
    if(!transitions.length) cb()
  }
}
