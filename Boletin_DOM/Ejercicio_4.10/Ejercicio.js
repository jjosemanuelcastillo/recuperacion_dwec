let contador = 0;

//Función para añadir Párrafos mediante manipulación de tipo Element
function añadir(){
    contador++;
    let miDiv = document.querySelector('div');
    let p = document.createElement('p');
    p.innerHTML = `Párrafo número ${contador}`;
    miDiv.appendChild(p);
}
//Función para añadir Párrafos mediante manipulación html
function añadir2(){
    contador++;
    let miDiv = document.querySelector('div');
    miDiv.insertAdjacentHTML('beforeend',`<p>Parrafo número ${contador}</p>`);
}