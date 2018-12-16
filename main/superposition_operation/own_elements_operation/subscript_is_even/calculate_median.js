'use strict';

var compute_median = require("../../../reduce/compute_median.js")

var calculate_median = function(collection) {
  let odd_subscript_arr = get_subscript_arr(collection, "odd");
  return compute_median(odd_subscript_arr);
};

function get_subscript_arr(collection, script_type) {
  if (script_type === "even") {
    return collection.filter(function(cur_value, cur_i, arr) {
      return cur_i % 2 === 0;
    })
  } else if (script_type === "odd") {
    return collection.filter(function(cur_value, cur_i, arr) {
      return cur_i % 2 === 1;
    })
  }
}
module.exports = calculate_median;