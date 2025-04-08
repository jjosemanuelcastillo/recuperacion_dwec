class Alumno{
    constructor(nombre,apellido1,apellido2,dni){
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._dni = dni;
        this._notas  = [];
    }

    agregarNotas(...nota){
        this._notas.push(...nota);

        
    }

    obtenerCorreoCorporativo(){
        let correo = this._nombre.substr(0,1);
        correo += this._apellido1.substring(0,3);
        correo += this._apellido2.substring(0,3);
        correo += this._dni.slice(-3);
        console.log(correo);
    }

    obtenerNotaMedia(){
        let notaMedia = 0;
        this._notas.forEach(element => {
            notaMedia += element.nota;
        });

        notaMedia /= this._notas.length;

        return notaMedia;
    }
}


class Aula{

    constructor(numeroAula,nombreAula){
        this._numeroAula = numeroAula;
        this._nombreAula = nombreAula;
        this._Alumnos = [];
    }

    get numeroALumnos(){
        return this._Alumnos.length;
    }

    obtenerAlumnos(alumno){
        this._Alumnos.push(alumno);
    }
}
let alumno1 = new Alumno("pepe","Calle","Castillo","20503626T");
let alumno2 = new Alumno("pepe","Calle","Castillo","20503626T");

alumno1.obtenerCorreoCorporativo();
alumno2.obtenerCorreoCorporativo();
alumno1.agregarNotas({asignatura:"DWEC", nota: 6.2}, {asignatura: "DWEC", nota: 7.1}, {asignatura:"DIW", nota: 8.7});
alumno2.agregarNotas({asignatura:"DWEC", nota: 6.2}, {asignatura: "DWEC", nota: 7.1}, {asignatura:"DIW", nota: 8.7});
console.log(alumno1.obtenerNotaMedia());
let aula1 = new Aula("9B","2º DAW");
aula1.obtenerAlumnos(alumno1);
aula1.obtenerAlumnos(alumno2);
console.log(aula1.numeroALumnos);