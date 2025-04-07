class Alumno{
    constructor(nombre,apellido1,apellido2,dni){
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._dni = dni;
        this._notas  = [];
    }

    agregarNotas(...nota){
        this._notas.push(nota);

        this._notas.forEach(element => {
            element
        });
    }

    obtenerCorreoCorporativo(){
        let correo = this._nombre.substr(0,1);
        correo += this._apellido1.substring(0,3);
        correo += this._apellido2.substring(0,3);
        correo += this._dni.slice(-3);
        console.log(correo);
    }

    obtenerNotaMedia(){
        
    }
}

let alumno1 = new Alumno("pepe","Calle","Castillo","20503626T");

alumno1.obtenerCorreoCorporativo();
alumno1.agregarNotas({asignatura:"DWEC", nota: 6.2}, {asignatura: "DWEC", nota: 7.1}, {asignatura:"DIW", nota: 8.7});
