'use strict';

const alpha_number = {
    '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e',
    '6': 'f', '7': 'g', '8': 'h', '9': 'i', '10': 'j',
    '11': 'k', '12': 'l', '13': 'm', '14': 'n', '15': 'o',
    '16': 'p', '17': 'q', '18': 'r', '19': 's', '20': 't',
    '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
}

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let alpha_array = [];
  let interval_array = get_integer_interval(number_a, number_b);
  for (let i = 0; i < interval_array.length; i++){
    alpha_array.push(alpha_number[interval_array[i]]);
  }
  return alpha_array;
}

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

module.exports = get_letter_interval;
