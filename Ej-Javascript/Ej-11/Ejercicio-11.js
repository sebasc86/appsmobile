class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return "Me llamo " + this.nombre + " y tengo " + this.edad + " años";
    }
}

var persona = new Persona('Jorge', 56);
console.log(persona.presentarse());