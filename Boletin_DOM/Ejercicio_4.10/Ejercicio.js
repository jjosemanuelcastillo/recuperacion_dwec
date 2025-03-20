let contador = 0;
function añadir(){
    contador++;
    let miDiv = document.querySelector('div');
    let p = document.createElement('p');
    p.innerHTML = `Párrafo número ${contador}`;
    miDiv.appendChild(p);
}
function añadir2(){
    contador++;
    let miDiv = document.querySelector('div');
    miDiv.insertAdjacentHTML('beforeend',`<p>Parrafo número ${contador}</p>`);
}