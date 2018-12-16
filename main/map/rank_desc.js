'use strict';
var rank_desc = function(collection) {
  let desc_arr = collection.sort(function(a, b) {
    return b - a;
  });
  return desc_arr;
};
module.exports = rank_desc;