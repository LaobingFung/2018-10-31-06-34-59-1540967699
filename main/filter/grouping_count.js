'use strict';

var choose_no_repeat_number = require("../filter/choose_no_repeat_number.js");

function grouping_count(collection) {
  //在这里写入代码
  let element_count = new Object;
  let no_repeat_array = choose_no_repeat_number(collection);
  for (let i = 0; i < no_repeat_array.length; i++) {
    let count = 0;
    for (let j = 0; j < collection.length; j++) {
      if (no_repeat_array[i] === collection[j]) {
        count++;
      }
    }
    element_count[no_repeat_array[i]] = count;
  }
  return element_count;
}
module.exports = grouping_count;