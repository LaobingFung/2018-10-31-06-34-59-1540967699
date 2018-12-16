'use strict';
var rank_asc = function(collection) {
  let asc_arr = collection.sort(function(a, b) {
    return a - b;
  });
  return asc_arr;
}
module.exports = rank_asc;