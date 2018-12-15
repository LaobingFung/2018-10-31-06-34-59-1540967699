function count_same_elements(collection) {
  //在这里写入代码
  let count_result = [];
  let counter = count_element(collection);
  for (let object of counter) {
    count_result.push({
      name: object[0],
      summary: object[1]
    });
  }
  return count_result;
}

function count_element(array) {
  let counter_map = new Map();
  let re_bar = /[A-z]-[1-9][0-9]*/;
  let re_colon = /[A-z]:[1-9][0-9]*/;
  let re_sqbracket = /[A-z]\[[1-9][0-9]*\]/
  for (let element of array) {
    if (re_bar.test(element) || re_colon.test(element) || re_sqbracket.test(element)) {
      add_count_map(counter_map, element.match(/[A-z]/)[0], parseInt(element.match(/[1-9][0-9]*/)[0]))
      continue;
    }
    add_count_map(counter_map, element, 1);
  }
  return counter_map;
}

function add_count_map(map, element, count) {
  if (!map.has(element)) {
    map.set(element, 0);
  }
  map.set(element, map.get(element) + count);
}
module.exports = count_same_elements;