function insertar(){
    //cogemos el id deldiv del html
    let lista = document.getElementById("listaTexto");
    //Recogemos el valor introducido del campo de texto 
    let texto = document.getElementById("textoIntroducido").value;

    //Creamos elemento p para añadirlo al html
    let p = document.createElement("p");
    //Agregamos el texto recogido anteriormente al parrafo
    p.innerHTML = texto;
    //Creación de los botones
    let actualizar = document.createElement("button")
    let borrar = document.createElement("button")

    //Texto para los botones
    actualizar.textContent = "Actualizar";
    borrar.textContent = "Borrar";

    //introducimos las etiquetas creadas anteriormente a la lista que es el div del html
    lista.appendChild(p);
    lista.appendChild(actualizar);
    lista.appendChild(borrar);

    //evento onclick para actualizar
    actualizar.onclick =  () => {
        let textoNuevo = prompt("Nuevo texto",p.textContent);
        if(textoNuevo !== null){
            p.innerHTML = textoNuevo;
        }

    };
    //EVento onclick para borrar
    borrar.onclick =  () => {
        p.remove();
        borrar.remove();
        actualizar.remove();
    };


}