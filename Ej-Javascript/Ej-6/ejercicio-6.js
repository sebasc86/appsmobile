let notas = [[3,7,7], [4,6,7], [4,5,5]];
var quienesAprobaron = [];

/*
// Solucion 1
 
for (let i of notas){
    const aprobo = (element) => element >= 4;
    var aprobado = i.every(aprobo);
    if (i.every(aprobo) === true){
        quienesAprobaron.push(i);
    }
}

*/

// Solucion 2

notas.forEach(function(elemento) {
    if (elemento.every((nota) => nota >= 4)){
        quienesAprobaron.push(elemento);
    }
});

console.log(quienesAprobaron);
