'use strict';
let get_median = require('../reduce/compute_median.js');

function compute_chain_median(collection) {
  //在这里写入代码
  let arr_str = collection.split('->');
  let arr = arr_str.map(function(num_str) {
    return parseInt(num_str);
  })
  return get_median(arr);
}
module.exports = compute_chain_median;