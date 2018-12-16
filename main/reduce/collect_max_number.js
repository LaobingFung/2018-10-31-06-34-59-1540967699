'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce(get_max, 5);
}

function get_max(max, num) {
  return max > num ? max : num;
}
module.exports = collect_max_number;