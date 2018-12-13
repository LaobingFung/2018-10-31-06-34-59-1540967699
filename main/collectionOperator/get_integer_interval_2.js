'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if (number_a < number_b) {
    return get_even_interval_inc(number_a, number_b);
  }
  return get_even_interval_inc(number_b, number_a).reverse();
}

function get_even_interval_inc(min, max) {
  let even_array = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      even_array.push(i);
    }
  }
  return even_array;
}
module.exports = get_integer_interval_2;