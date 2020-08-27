const array = [1, 2, 3, 4, 5, 6];

const nPar = (element) => element % 2 === 0;

console.log(array.some(nPar));