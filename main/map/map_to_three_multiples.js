'use strict';
var map_to_three_multiples = function(collection) {
  let three_times = new Array();
  for (let element of collection) {
    three_times.push(element * 3);
  }
  return three_times;
};
module.exports = map_to_three_multiples;