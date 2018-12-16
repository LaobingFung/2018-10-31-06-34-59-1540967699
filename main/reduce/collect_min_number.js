'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(get_min, 1000);
}

function get_min(min, num) {
  return min < num ? min : num;
}
module.exports = collect_min_number;