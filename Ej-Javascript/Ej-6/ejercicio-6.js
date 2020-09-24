let notas = [[3,7,7], [4,6,7], [4,5,5]];

const aprobo = (arr) =>  arr.every((nota) => nota >= 4)


const quienesAprobaron = (arr) => arr.filter( i => aprobo(i));

console.log(quienesAprobaron(notas))

