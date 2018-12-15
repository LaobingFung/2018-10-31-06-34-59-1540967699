'use strict';

function map_to_even(collection) {
  let double = new Array();
  for (let element of collection) {
    double.push(element * 2);
  }
  return double;
}
module.exports = map_to_even;