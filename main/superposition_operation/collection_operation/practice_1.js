'use strict';
var compute_elements_sum = require('../../reduce/compute_sum.js');

function hybrid_operation(collection) {
  //在这里写入代码
  let map_arr = collection.map(function(cur_value) {
    return cur_value * 3 + 2;
  })
  return compute_elements_sum(map_arr);
}
module.exports = hybrid_operation;