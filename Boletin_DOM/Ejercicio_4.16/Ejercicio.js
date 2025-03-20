function tamaño(){
    let p = document.getElementById("parrafo");
    let select = document.getElementById("tamaño").value;
    p.style.fontSize = `${select}`;
}