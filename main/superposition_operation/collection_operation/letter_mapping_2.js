'use strict';
var number_map_to_word_over_26 = require('../../map/number_map_to_word_over_26.js');
var compute_average = require('../../reduce/compute_average.js');


function average_to_letter(collection) {
  //在这里写入代码
  let avg = compute_average(collection);
  let letter = number_map_to_word_over_26([Math.ceil(avg)]);
  return letter[0];
}

module.exports = average_to_letter;

