const find = require('./utilities/find.js');
const editArray = require('./utilities/edit_array.js');

const { sum, concat, cut3 } = editArray;
const { lgNum } = find;

let ary1 = [1, 3, 5];
let ary2 = [2, 4, 6];

console.log(sum(ary1));

let ary3 = concat(ary1, ary2);
console.log(lgNum(ary3));
console.log(cut3(ary3));