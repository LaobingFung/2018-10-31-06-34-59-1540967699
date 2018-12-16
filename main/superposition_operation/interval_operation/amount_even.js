'use strict';
var choose_even = require("../../filter/choose_even.js");
var compute_elements_sum = require('../../reduce/compute_sum.js');

function amount_even(collection) {
  //在这里写入代码
  let even = choose_even(collection);
  return compute_elements_sum(even);
}
module.exports = amount_even;