'use strict';

function one_add_next_multiply_three(collection) {
  let map_arr = collection.map(function(cur_value, cur_i, arr) {
    return (cur_value + arr[cur_i + 1]) * 3;
  })
  map_arr.pop();
  return map_arr;
}
module.exports = one_add_next_multiply_three;