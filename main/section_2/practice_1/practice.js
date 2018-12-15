'use strict';

function count_same_elements(collection) {
  //在这里写入代码
  let count_result = [];
  let counter = count_element(collection);
  for (let object of counter) {
    count_result.push({key: object[0], count: object[1]});
  }
  return count_result;
}

function count_element(array) {
  let counter_map = new Map();
  for (let element of array) {
    if (!counter_map.has(element)) {
      counter_map.set(element, 0);
    }
    counter_map.set(element, counter_map.get(element) + 1);
  }
  return counter_map;
}
module.exports = count_same_elements;