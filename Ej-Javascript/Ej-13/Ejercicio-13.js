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


class Profesor extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.estudiantes = [];
    }

    addEstudiante(estudiante) {
        estudiante.setProfesor(this.nombre);
        this.estudiantes.push(estudiante);
    }

    enseñando() {
        this.estudiantes.forEach(estudiante => console.log("Le estoy ensañando a " + estudiante.nombre));
     }
 
}

    let Alumnos = [
        new Estudiante("Pedro", 20),
        new Estudiante("Carlos", 23)
    ];


    let profesor = new Profesor("Juan", 40, Alumnos);
    
    profesor.addEstudiante(new Estudiante("Laura", 21));

    console.log(profesor.enseñando());
   