'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(get_sum) / collection.length;
}

function get_sum(sum, num) {
  return sum += num;
}
module.exports = compute_average;