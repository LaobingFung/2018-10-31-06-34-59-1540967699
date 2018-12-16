'use strict';
var number_map_to_word_over_26 = require('../../map/number_map_to_word_over_26.js');
var choose_even = require("../../filter/choose_even.js");

function even_to_letter(collection) {
  //在这里写入代码
  let even = choose_even(collection);
  return number_map_to_word_over_26(even);
}

module.exports = even_to_letter;
