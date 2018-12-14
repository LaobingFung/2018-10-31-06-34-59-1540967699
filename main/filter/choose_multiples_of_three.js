'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  let times_of_3_collection = collection.filter(function (element) {
    return element % 3 === 0;
  })
  return times_of_3_collection;
}

module.exports = choose_multiples_of_three;
