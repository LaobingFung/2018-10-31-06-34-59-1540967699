'use strict';
var rank_asc = require('../../map/rank_asc.js');

function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  let asc_arr = rank_asc(collection);
  let rank_arr = new Array();
  for (let i = 0; i < asc_arr.length; i += 3) {
    if (asc_arr.length - i < 3) {
      rank_arr = rank_arr.concat(asc_arr.slice(i));
      break;
    }
    rank_arr = rank_arr.concat(asc_arr.slice(i + 1, i + 3), asc_arr.slice(i, i + 1));
  }
  return rank_arr;
}
module.exports = rank_by_two_large_one_small;