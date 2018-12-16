'use strict';

function compute_median(collection) {
  //在这里写入代码
  let sort_arr = collection.sort(function(a, b) {
    return b - a;
  });
  if (collection.length % 2 === 1) {
    return sort_arr[Math.floor(sort_arr.length / 2)];
  }
  return (sort_arr[sort_arr.length / 2] + sort_arr[sort_arr.length / 2 - 1]) / 2;
}
module.exports = compute_median;