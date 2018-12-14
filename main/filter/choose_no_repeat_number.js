'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  let no_repeat_collection = collection.filter(function(element, i, arr) {
    return arr.lastIndexOf(element) === i;
  })
  return no_repeat_collection;
}
module.exports = choose_no_repeat_number;