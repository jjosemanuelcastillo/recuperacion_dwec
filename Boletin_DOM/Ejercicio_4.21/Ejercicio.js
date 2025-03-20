let contador = 0;
function addParagraph(){
    let p = document.querySelectorAll("p");
    let color = document.getElementById("txtColor").value;
    
    p.forEach((element,index) => {
        element.innerHTML = `Parrafo ${index}`;
        element.style.color = color;
    });
    contador++;
} 
