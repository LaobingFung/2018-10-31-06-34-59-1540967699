'use strict';

var choose_no_common_elements = require("../../filter/two_collections_practice_2.js");
var choose_even = require("../../filter/choose_even.js");
var rank_asc = require('../../map/rank_asc.js');
var rank_desc = require('../../map/rank_desc.js');

var even_asc_odd_desc = function(collection) {
  let even_arr = choose_even(collection);
  let odd_arr = choose_no_common_elements(collection, even_arr);
  let rank_even_asc = rank_asc(even_arr);
  let rank_odd_desc = rank_desc(odd_arr);
  return rank_even_asc.concat(rank_odd_desc);
}
module.exports = even_asc_odd_desc;