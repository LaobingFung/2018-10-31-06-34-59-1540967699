'use strict';

var get_letter_interval = require('get_letter_interval.js');
var get_integer_interval = require('get_integer_interval.js');

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let letter_array =[];
  let integer_array = get_integer_interval(number_a, number_b);
  for (let i = 0; i < integer_array.length; i++){
    let str_to_push = '';
    while(integer_array[i] / 26 !== 0){
        str_to_push += (get_letter_interval(i % 26, i % 26)[0]);
        integer_array[i] /= 26;
    }
    letter_array.push(str_to_push.split('').reverse().join(''));
  }
  return letter_array;
}

module.exports = get_letter_interval_2;

