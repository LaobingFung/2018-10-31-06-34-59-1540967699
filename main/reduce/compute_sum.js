'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce(get_sum, 0);
}

function get_sum(sum, num) {
  return sum += num;
}
module.exports = calculate_elements_sum;