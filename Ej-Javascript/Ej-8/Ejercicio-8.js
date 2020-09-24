let array = [1, 2, 3, 4, 5];

var even = (element) => element % 2 === 0;

const cuantosCumplen = (arr, cond) => arr.filter(e => cond(e)).length;

console.log(cuantosCumplen(array, even));