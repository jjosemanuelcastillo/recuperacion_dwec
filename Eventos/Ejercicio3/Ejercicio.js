function mostrarLocalidadSeleccionada(){
    let idLocalidad = document.getElementById("localidad").value;
    let idTextoMostrar = document.getElementById("localidadTexto");

    idTextoMostrar.innerHTML = `Localidad Seleccionada: ${idLocalidad}`;
}

addEventListener("change",mostrarLocalidadSeleccionada);