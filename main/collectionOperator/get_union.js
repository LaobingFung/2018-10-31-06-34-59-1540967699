'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let union = collection_a.slice(0);
  collection_b.forEach(function(element_b){
    if (!collection_a.includes(element_b)){
        union.push(element_b);
    }
  })
  return union;
}

module.exports = get_union;

