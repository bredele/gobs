

module.exports = function(transitions, cb) {
  return function(event) {
    var index = transitions.indexOf(event)
    if(index > -1) transitions.splice(index, 1)
    if(!transitions.length) cb()
  }
}
