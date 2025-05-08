function cargar() {
    let maximoNombre = document.getElementById("nombre");
    let altura = document.getElementById("altura");
    let sexoMujer = document.getElementById('mujer')
    let sexoHombre = document.getElementById('hombre')
    let fechaNacimiento = document.getElementById("fechaNacimiento");
    maximoNombre.setAttribute('maxlength', '30');
    maximoNombre.setAttribute('required', '');
    sexoMujer.setAttribute('required', '');
    sexoHombre.setAttribute('required', '');
    altura.setAttribute('min', '50');
    altura.setAttribute('max', '210');
    fechaNacimiento.setAttribute('required', '');
}

addEventListener('load', cargar);