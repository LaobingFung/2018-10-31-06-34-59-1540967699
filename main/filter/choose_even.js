'use strict';

function choose_even(collection) {
  //在这里写入代码
  let even_collection = collection.filter(function (element) {
    return element % 2 === 0;
  })
  return even_collection;
}

module.exports = choose_even;
