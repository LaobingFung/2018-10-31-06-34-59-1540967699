'use strict';
var choose_even = require("../../../filter/choose_even.js");
var compute_average = require("../../../reduce/compute_average.js");
var even_group_calculate_average = function(collection) {
  let averages = new Array();
  let odd_subscript_arr = get_subscript_arr(collection, "odd");
  let odd_subscript_even_arr = choose_even(odd_subscript_arr);
  if (odd_subscript_even_arr.length === 0) {
    return [0];
  }
  let groups = group_by_digit(odd_subscript_even_arr);
  for (let group of groups) {
    if (group.length !== 0) {
      averages.push(compute_average(group));
    }
  }
  return averages;
}

function group_by_digit(arr) {
  let groups = new Array(3);
  for (let i = 0; i < 3; i++) {
    groups[i] = new Array();
  }
  for (let element of arr) {
    if (element > 0 && element < 10) {
      groups[0].push(element);
    } else if (element >= 10 && element < 100) {
      groups[1].push(element);
    } else if (element >= 100 && element < 1000) {
      groups[2].push(element);
    }
  }
  return groups;
}

function get_subscript_arr(collection, script_type) {
  if (script_type === "even") {
    return collection.filter(function(cur_value, cur_i, arr) {
      return cur_i % 2 === 0;
    })
  } else if (script_type === "odd") {
    return collection.filter(function(cur_value, cur_i, arr) {
      return cur_i % 2 === 1;
    })
  }
}
module.exports = even_group_calculate_average;