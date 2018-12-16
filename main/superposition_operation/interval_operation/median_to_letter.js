'use strict';
var number_map_to_word_over_26 = require('../../map/number_map_to_word_over_26.js');
var compute_median = require('../../reduce/compute_median.js');

function median_to_letter(collection) {
  //在这里写入代码
  let median = compute_median(collection);
  let letter = number_map_to_word_over_26([Math.ceil(median)]);
  return letter[0];
}

module.exports = median_to_letter;
