let array = [1, 2, 3, 4, 5];

var even = (element) => element % 2 === 0;
var cuantosCumplen = array.filter(even);

console.log(cuantosCumplen.length);