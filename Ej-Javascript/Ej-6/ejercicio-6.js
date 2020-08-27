let notas = [[3,7,7], [4,6,7], [4,5,5]];
var quienesAprobaron = [];

notas.forEach(function(elemento) {
    if (elemento.every((nota) => nota >= 4)){
        quienesAprobaron.push(elemento);
    }
});

console.log(quienesAprobaron);
