'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a < number_b) {
    return get_even_interval_inc(number_a, number_b);
  }
  return get_even_interval_inc(number_b, number_a).reverse();
}

function get_even_interval_inc(min, max) {
  let interval_array_inc = [];
  for (let i = min; i <= max; i++) {
    interval_array_inc.push(i);
  }
  return interval_array_inc;
}
module.exports = get_integer_interval;