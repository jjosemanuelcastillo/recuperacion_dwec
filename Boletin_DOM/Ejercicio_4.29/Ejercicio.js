function tirarDado() {
    let nDado = Math.floor(Math.random() * 6) + 1; // Generar número aleatorio en cada llamada
    let divDado = document.getElementById("dado");
    divDado.innerHTML = nDado;
}