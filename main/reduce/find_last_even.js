'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for (let element of collection.reverse()) {
    if (element % 2 === 0) {
      return element;
    }
  }
  return undefined;
}
module.exports = find_last_even;