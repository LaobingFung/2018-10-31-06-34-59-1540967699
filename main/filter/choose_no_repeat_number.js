'use strict';

// function choose_no_repeat_number(collection) {
//   //在这里写入代码
//   let no_repeat_collection = collection.filter(function(element, i, arr) {
//     return arr.lastIndexOf(element) === i;
//   })
//   return no_repeat_collection;
// }
function choose_no_repeat_number(collection) {
  let no_repeat_collection = [];
  for (let element of collection) {
    if (!no_repeat_collection.includes(element)) {
      no_repeat_collection.push(element);
    }
  }
  return no_repeat_collection;
}
module.exports = choose_no_repeat_number;