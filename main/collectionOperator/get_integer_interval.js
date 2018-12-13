'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let even_array;
  if (number_a < number_b) {
    return get_even_interval_inc(number_a, number_b);
  }
  return get_even_interval_inc(number_b, number_a).reverse();
}

function get_even_interval_inc(min, max) {
  let even_array = [];
  for (let i = min; i <= max; i++) {
    even_array.push(i);
  }
  return even_array;
}
module.exports = get_integer_interval;