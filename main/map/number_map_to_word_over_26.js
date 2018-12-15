'use strict';
var number_map_to_word = require('../map/number_map_to_word.js');
var number_map_to_word_over_26 = function(collection) {
  let words_collection = [];
  for (let element of collection) {
    let arr26 = decimal_to_26system_arr(element);
    let word_over26 = number_map_to_word(arr26).join('');
    words_collection.push(word_over26);
  }
  return words_collection;
};

function decimal_to_26system_arr(number) {
  let arr26 = [];
  if (number <= 26) {
    arr26.push(number);
    return arr26;
  }
  while (number / 26 !== 0) {
    arr26.push(number % 26);
    number = Math.floor(number / 26);
  }
  return arr26.reverse();
}
module.exports = number_map_to_word_over_26;