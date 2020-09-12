class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return "Me llamo " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    setProfesor(profesor) {
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

}

    var estudiante1 = new Estudiante('Jorge', 56);
    console.log(estudiante1.presentarse());
    console.log(estudiante1.setProfesor('Girafales'));
    console.log(estudiante1.estudiando());