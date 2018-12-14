'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let one_dimen_arr = new Array();
  for (let sub_arr of collection) {
    if (!Array.isArray(sub_arr)) {
      one_dimen_arr.push(sub_arr);
    } else {
      one_dimen_arr = one_dimen_arr.concat(sub_arr);
    }
  }
  return one_dimen_arr;
}
module.exports = double_to_one;