'use strict';
var map_to_four_multiples_add_one = function(collection) {
  let four_times_add_one = new Array();
  for (let element of collection) {
    four_times_add_one.push(element * 4 + 1);
  }
  return four_times_add_one;
};
module.exports = map_to_four_multiples_add_one;