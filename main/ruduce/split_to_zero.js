'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let interval_arr = [];
  for (; number + interval > 0; number -= interval) {
    number = Math.round(number * 10) / 10;
    interval_arr.push(number);
  }
  return interval_arr;
}
module.exports = spilt_to_zero;