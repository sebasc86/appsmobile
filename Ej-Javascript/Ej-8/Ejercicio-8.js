let array = [1, 2, 3, 4, 5];

// Solucion 1

/*
var cont = 0;

var cuantosCumplen = function (){
    for (let i of array){
        if (i % 2 === 0){
            cont++;
        }
    }
    return cont;
}
console.log(cuantosCumplen());
*/

// Solucion 2

var even = (element) => element % 2 === 0;
var cuantosCumplen = array.filter(even);

console.log(cuantosCumplen.length);