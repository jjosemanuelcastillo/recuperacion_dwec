function añadirTexto(){
    let textoIntroducido = document.getElementById("nombre");
    let idDivTexto = document.getElementById("texto");

    idDivTexto.innerHTML = textoIntroducido.value;
}
addEventListener("input",añadirTexto);
