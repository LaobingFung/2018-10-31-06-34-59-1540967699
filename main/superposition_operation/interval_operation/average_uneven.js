'use strict';
var choose_no_common_elements = require("../../filter/two_collections_practice_2.js");
var choose_even = require("../../filter/choose_even.js");
var compute_average = require('../../reduce/compute_average.js');

function average_uneven(collection) {
  //在这里写入代码
  let even_arr = choose_even(collection);
  let odd_arr = choose_no_common_elements(collection, even_arr);
  return compute_average(odd_arr);
}
module.exports = average_uneven;